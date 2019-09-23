var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    password: "PASS",
    database: "bamazon_db"
});



connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    productsForSale();
});


function productsForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res)
        managerChoice(res);
        // // Log all results of the SELECT statement

        // console.log(res);
        // connection.end();
    });
}

function managerChoice(products) {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "choice",
                choices: [`View Products for Sale`,`View Low Inventory`, `Add to Inventory`, `Add New Product` ],
                message: "What would you like to do?"
            }
        ]).then(function(val) {
            // var managerChoice = val.choice
            switch(val.choice){
                case `View Products for Sale`:
                console.table(products);
                managerChoice(); 

                break; 
                case `View Low Inventory`:
                lowInventory();//connection.query SELECT FROM WHERE stock quanity is <= 5 console.table(res)
                break;

                case `Add to Inventory`://will just be an update
                addInventory(products); // input will be choice, then ask for id, then grab that and 
                break;

                case `Add New Product`:// will be inquirer
                newProduct(products);//have an input for new product connection query SET STOCK input: type wil be list, Choices: type for the price then type for the quantity. then call add new products.
                break;
                default: console.log("Goodbye");
                process.exit(0);
                break;
            }
        });        
}


function lowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err, res) {
        if (err) throw err;
        console.table(res);
        managerChoice(res);
        // // Log all results of the SELECT statement

        // console.log(res);
        
    });
}



