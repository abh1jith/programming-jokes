const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart";
    https.get(url, function(response){
        response.on("data", function(data){
            const jokeData = JSON.parse(data);
            const s = jokeData.setup;
            const d = jokeData.delivery;
            console.log(s, d);
            res.render("index", {setup: s, delivery: d});
        });
    });
});
app.listen(3000, function(){
    console.log("Server is running on port: 3000");
});