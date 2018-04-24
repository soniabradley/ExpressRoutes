var express = require("express");
var app = express();

var PORT = 3000;

// "/" => "Howdy partner!"
app.get("/", function(req,res){
    res.send("Howdy partner!");
});

// "/bye" => "Goodbye to you!"
app.get("/bye", function(req,res){
    res.send("Goodbye to you!");
});

// "/dog"=> "Meow!"
app.get("/dog", function(req,res){
    console.log("This will post only when localhost:3000/dog is prompted");
    res.send("Meow!");
});

app.listen(PORT, function(){
    console.log("Server is listening");
});

