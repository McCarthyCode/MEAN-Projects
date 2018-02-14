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
mongoose.connect("mongodb://localhost/mongoose_dashboard");
mongoose.Promise = global.Promise;

// schemas
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required."], minlength: [4, "Name must contain at least four letters."] },
    text: { type: String, required: [true, "Message is required."] },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });
var CommentSchema = new mongoose.Schema({
    _message: { type: Schema.Types.ObjectId, ref: 'Message' },
    name: { type: String, required: [true, "Name is required."], minlength: [4, "Name must contain at least four letters."] },
    text: { type: String, required: [true, "Comment is required."] }
}, { timestamps: true });
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

// routes
app.get("/", function (req, res) {
    Message
        .find({})
        .populate('comments')
        .exec(function (err, messages) {
            res.render("index", { messages: messages, errors: [] });
        });
});
app.post("/message", function (req, res) {
    var message = new Message(req.body);
    message.save(function (err) {
        if (err) {
            Message
                .find({})
                .populate('comments')
                .exec(function (err, messages) {
                    res.render("index", { messages: messages, errors: message.errors });
                });
        }
        else {
            res.redirect("/");
        }
    });
});
app.post("/comments/:id", function (req, res) {
    Message.findById(req.params.id, function(err, message) {
        var comment = new Comment(req.body);
        comment._message = req.params.id;
        comment.save(function(err) {
            if (err) {
                Message
                    .find({})
                    .populate('comments')
                    .exec(function (err, messages) {
                        res.render("index", { messages: messages, errors: comment.errors });
                    });
            } else {
                console.log("No error in comment.save()");
                message.comments.push(comment);
                message.save(function(err) {
                    if (err) {
                        Message
                            .find({})
                            .populate('comments')
                            .exec(function (err, messages) {
                                res.render("index", { messages: messages, errors: message.errors });
                            });
                    }
                    else {
                        console.log("No error.");
                        res.redirect('/');
                    }
                });
            }
        });
    });
});
