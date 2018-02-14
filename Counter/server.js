// includes
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/")));
app.use(session({ secret: 'codingdojorocks' }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function (req, res) {
    req.session.count = isNaN(req.session.count) ? 1 : req.session.count + 1;
    res.render("index", {
        session: req.session
    });
})
app.post('/plusTwo', function (req, res) {
    req.session.count++;

    res.redirect('/');
})
app.post('/reset', function (req, res) {
    req.session.count = 0;

    res.redirect('/');
})

// initialization
app.listen(8000, function () {
    console.log("listening on port 8000");
});
