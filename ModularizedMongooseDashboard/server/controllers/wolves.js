var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');
module.exports = {
    showAll: function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render("index", { wolves: wolves });
        });
    },
    showOne: function (req, res) {
        Wolf.findById(req.params.id, function (err, wolf) {
            if (err) {
                res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
            }
            else {
                res.render("wolf", { wolf: wolf });
            }
        });
    },
    create: function (req, res) {
        let wolf = new Wolf(req.body);
        wolf.save(function (err) {
            if (err) {
                res.render("new", { errors: wolf.errors });
            }
            else {
                res.redirect("/");
            }
        });
    },
    edit: function (req, res) {
        Wolf.findById(req.params.id, function (err, wolf) {
            if (err) {
                res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
            }
            else {
                res.render("edit", { wolf: wolf, errors: [] });
            }
        });
    },
    update: function(req, res) {
        Wolf.findById(req.params.id, function (err, wolf) {
            if (err) {
                res.status(404).send("Entry does not exist. <a href=\"/\">Go back.</a>")
            }
            else {
                wolf.name = req.body.name;
                wolf.description = req.body.description;
                wolf.save(function (err) {
                    res.redirect("/");
                });
            }
        });
    },
    delete: function (req, res) {
        Wolf.remove({ _id: req.params.id }, function (err) {
            res.redirect("/");
        });
    }
}
