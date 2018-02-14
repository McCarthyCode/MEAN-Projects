// includes
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/css")));
app.use(express.static(path.join(__dirname, "./static/js")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// sockets
var messages = [];
io.sockets.on('connection', function(socket) {
    socket.emit("update", messages);
    
    socket.on("input", function(data) {
        messages.push(data);
        io.emit("update", messages);
    });
});

// routes
app.get('/', function(req, res) {
    res.render("index");
})
