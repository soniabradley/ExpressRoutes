var express = require("express");
var app = express();

var PORT = 3000;

// "/" => "Howdy partner!"
app.get("/", function (req, res) {
    res.send("Howdy partner!");
});

// "/bye" => "Goodbye to you!"
app.get("/bye", function (req, res) {
    res.send("Goodbye to you!");
});

// "/dog"=> "Meow!"
app.get("/dog", function (req, res) {
    console.log("This will post only when localhost:3000/dog is prompted");
    res.send("Meow!");
});

// request parameters, dynamic webpage
app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
    console.log(req.params);
    res.send("You are now using Subreddit with comments, id, title!");
});


// Order of routes matter, if this is placed at top, it will always default to it
app.get("*", function (req, res) {
    res.send("aaah you found me!");
});

app.listen(PORT, function () {
    console.log("Server is listening");
});