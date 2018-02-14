// requires
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
// var mongoose = require('mongoose');

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/css")));
// app.use(express.static(path.join(__dirname, "./static/js")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/mongoose_dashboard");
mongoose.Promise = global.Promise;

// schemas
var WolfSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    description: { type: String, required: false }
}, { timestamps: true });
// var Wolf = mongoose.model('Wolf', WolfSchema);

// routes
var routes = require('./server/config/routes.js');
routes(app);
// app.get("/", function (req, res) {
//     Wolf.find({}, function (err, wolves) {
//         res.render("index", { wolves: wolves });
//     });
// });
// app.get("/wolves/new", function (req, res) {
//     res.render("new", { errors: [] });
// });
// app.get("/wolves/:id", function (req, res) {
//     Wolf.findById(req.params.id, function (err, wolf) {
//         if (err) {
//             res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
//         }
//         else {
//             res.render("wolf", { wolf: wolf });
//         }
//     });
// });
// app.post("/wolves", function (req, res) {
//     let wolf = new Wolf(req.body);
//     wolf.save(function (err) {
//         if (err) {
//             res.render("new", { errors: wolf.errors });
//         }
//         else {
//             res.redirect("/");
//         }
//     });
// });
// app.get("/wolves/edit/:id", function (req, res) {
//     Wolf.findById(req.params.id, function (err, wolf) {
//         if (err) {
//             res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
//         }
//         else {
//             res.render("edit", { wolf: wolf, errors: [] });
//         }
//     });
// });
// app.post("/wolves/:id", function (req, res) {
//     Wolf.findById(req.params.id, function (err, wolf) {
//         if (err) {
//             res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
//         }
//         else {
//             wolf.name = req.body.name;
//             wolf.description = req.body.description;
//             wolf.save(function (err) {
//                 res.redirect("/");
//             });
//         }
//     });
// });
// app.post("/wolves/destroy/:id", function (req, res) {
//     Wolf.remove({ _id: req.params.id }, function (err) {
//         res.redirect("/");
//     });
// });
