//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

//set up port
const PORT = process.env.PORT || 9595;

//static files
app.use(express.static("public"));

//add body parser elements
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup handlebars-template engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//add routes 
const routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT);
});