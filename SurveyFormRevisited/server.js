// includes
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// sockets
var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);

    socket.on("submit", function (data) {
        socket.emit(
            "alert",
            "Name: " + data.name +
            "<br>Location: " + data.location +
            "<br>Language: " + data.language +
            "<br>Comment: " + data.comment +
            "<br><br>Your lucky number is: " +
            Math.floor((Math.random() * 1000) + 1)
        );
    });
});

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

// // initialization
// app.listen(8000, function () {
//     console.log("listening on port 8000");
// });
