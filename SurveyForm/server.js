// includes
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function (req, res) {
    res.render("index");
})
app.post('/submit', function (req, res) {
    res.render('result', {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment,
    });
})

// initialization
app.listen(8000, function () {
    console.log("listening on port 8000");
});
