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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/css")));
// app.use(express.static(path.join(__dirname, "./static/js")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/quoting_dojo");
mongoose.Promise = global.Promise;

// schemas
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 20 }
}, { timestamps: true });
var Quote = mongoose.model('Quote', QuoteSchema);

// routes
app.get("/", function(req, res) {
    res.render("index", { errors: [] });
});
app.post("/quotes", function (req, res) {
    let quote = new Quote(req.body);
    quote.save(function (err) {
        if (err) {
            res.render("index", { errors: quote.errors });
        }
        else {
            res.redirect("/quotes");
        }
    });
});
app.get("/quotes", function(req, res) {
    Quote.find({}, function (err, quotes) {
        res.render("quotes", { quotes: quotes });
    })
});
