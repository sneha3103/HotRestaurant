//Dependencies
 
var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");

//Setting up express path
var app = express();
var PORT = 3001;

//Setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//this is what our module exports in our html routes. which is a function.
require("./app/routing/htmlRoutes.js")(app);

require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT  " + PORT);
});



