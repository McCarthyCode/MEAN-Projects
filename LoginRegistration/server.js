// requires
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
var session = require('express-session');

// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static/css")));
// app.use(express.static(path.join(__dirname, "./static/js")));
app.use(session({ secret: "keyboard cat" }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/login_registration");
mongoose.Promise = global.Promise;

// schemas
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: "Email failed validation"
        },
        unique: true
    },
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [2, "First name must have at least two letters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [2, "Last name must have at least two letters."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must have at least eight letters."],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(value);
            },
            message: "Password failed validation. A password must contain at least one number, one uppercase letter, and one special character."
        }
    },
    birthday: {
        type: Date,
        required: [true, "Birthday is required."],
        validate: {
            validator: function (value) {
                var today = new Date();
                var birthday = new Date(value);

                console.log(today);
                console.log(birthday);

                return today > birthday;
            },
            message: "Birthday must be in the past."
        }
    },
}, { timestamps: true });

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(error => {
            next();
        });
});

var User = mongoose.model('User', UserSchema);

// routes
app.get("/", function (req, res) {
    res.render("index", { success: "", errors: [] });
});
app.post("/register", function (req, res) {
    var user = new User(req.body);
    var passwordMismatch = req.body.password !== req.body.confirmPassword;
    
    user.save(function (error) {
        var extraErrors = [];
        if (passwordMismatch && (req.body.password === "" || req.body.passwordConfirm === "")) {
            extraErrors.push("Passwords must match.");
        }
        else {
            if (req.body.passwordConfirm === "") {
                extraErrors.push("Password confirmation is required.")
            }
        }
        if (typeof (user.errors) !== "undefined" && extraErrors !== []) {
            res.render("index", { errors: user.errors, extraErrors: extraErrors });
        }
        else {
            req.session.id = user._id;
            res.render("index", { success: "You have registered successfully." });
        }
    });
});
app.post("/login", function (req, res) {
    User.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            extraErrors.push(error);
            res.render("index", { errors: user.errors, extraErrors: extraErrors });
        }
        else {
            bcrypt.compare(req.body.password, user.password)
                .then(param => {
                    req.session.id = user._id;
                    res.render("index", { success: "You have logged in successfully." });
                })
                .catch(bcryptError => {
                    res.render("index", { errors: ["That email/password combination does not match our records."] });
                });
        }
    });
});
