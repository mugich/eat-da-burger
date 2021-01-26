// Requiring mysql package
var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
 }else {
connection = mysql.createConnection({
     host: "localhost",
    port: 3306,
    user: "root",
    password: "Ankhaa123",
    database: "burger_db"
});
 
};

// Connecting to the database.
connection.connect();
// Exporting our connection
module.exports = connection;