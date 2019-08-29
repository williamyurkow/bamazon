var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    password: "PASS",
    database: "bamazon_DB"
});



connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    open();
});