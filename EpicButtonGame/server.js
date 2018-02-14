// includes
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/css")));
app.use(express.static(path.join(__dirname, "./static/js")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// sockets
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
var count = 0;
io.sockets.on('connection', function(socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    
    socket.emit("update", count);

    socket.on("click", function () {
        io.emit("update", ++count);
    });
    socket.on("reset", function () {
        count = 0;
        io.emit("update", 0);
    });
});

// routes
app.get('/', function(req, res) {
    res.render("index");
})
