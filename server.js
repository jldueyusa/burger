//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

//set up port
var PORT = process.env.PORT || 9595;

//static files
app.use(express.static("public"));

//add body parser elements
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup handlebars-template engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//add routes 
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT);
})