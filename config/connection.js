//require dependency
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MmSj.01!",
    database: "burgers_db"
  });
}
connection.connect(function(ok, error){
  console.log(ok);
  console.log("error", error);
});
module.exports = connection;