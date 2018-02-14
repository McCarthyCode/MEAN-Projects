var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');

var wolves = require('../controllers/wolves.js');
module.exports = function (app) {
    app.get("/", function (req, res) {
        wolves.showAll(req, res);
    });
    app.get("/wolves/new", function (req, res) {
        res.render("new", { errors: [] });
    });
    app.get("/wolves/:id", function (req, res) {
        wolves.showOne(req, res);
    });
    app.post("/wolves", function (req, res) {
        wolves.create(req, res);
    });
    app.get("/wolves/edit/:id", function (req, res) {
        wolves.edit(req, res);
    });
    app.post("/wolves/:id", function (req, res) {
        wolves.update(req, res);
    });
    app.post("/wolves/destroy/:id", function (req, res) {
        wolves.delete(req, res);
    });
}