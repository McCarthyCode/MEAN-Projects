// requires
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var mongoose = require('mongoose');

// setup
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./static/css")));
// app.use(express.static(path.join(__dirname, "./static/js")));
// app.set("views", path.join(__dirname, "./views"));
// app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/1955");
mongoose.Promise = global.Promise;

// schemas
var Schema = mongoose.Schema;
var PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
var Person = mongoose.model('Person', PersonSchema);

// routes
app.get("/", function (req, res) {
    Person.find({}, function (err, people){
        if (err) {
            res.json({ message: "Error", error: err });
        }
        else {
            res.json(people);
        }
    });
});
app.get("/new/:name", function (req, res) {
    var person = new Person();
    person.name = req.params.name;
    person.save(function (err) {
        if (err) {
            res.json({ message: "Error", error: err });
        }
        else {
            res.json({ message: "Success", data: person });
        }
    });
});
app.get("/remove/:name", function (req, res) {
    Person.findOneAndRemove({ name: req.params.name }, function (err) {
        if (err) {
            res.json({ message: "Error", error: err });
        }
        else {
            res.json({ message: "Success" });
        }
    });
});
app.get("/:name", function (req, res) {
    Person.find({ name: req.params.name }, function (err, person) {
        if (err) {
            res.json({ message: "Error", error: err });
        }
        else {
            res.json(person);
        }
    });
});
