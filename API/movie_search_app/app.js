var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("search")
})
app.get("/results", function(req, res){
    // res.send("Hello it works!")
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            // console.log(parsedData);
            // res.send(parsedData.Search[0].Title);
            res.render("results", {data: parsedData});
            
        }
    })
    
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie app has started")
})