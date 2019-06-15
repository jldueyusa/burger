//require dependency
var mysql = require("mysql");

//create connection to the database
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MmSj.01!",
    database: "burgers_db"
})

//create the connection and console log to see if it is connected
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadID);
});
module.exports = connection;