var express = require("express");
var app = express();
var path = __dirname + '/views/';
var port = process.env.PORT || 3000;

app.use(express.static(path));

app.use("/", function(req, res) {
    res.sendFile(path + "index.html");
});

app.listen(port, function() {
    console.log("Live at Port " + port);
});