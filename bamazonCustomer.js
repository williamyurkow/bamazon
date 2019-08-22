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
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res)
        askCustomerWhatTheyWant(res);
        // Log all results of the SELECT statement
        con.query("SELECT product_name,  FROM products", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        console.log(res);
        connection.end();
    });
}

function askCustomerWhatTheyWant(inventory) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What's id of what you want"

    }]).then(function(val) {
        switch (val.choice) {
            case "item_id":

                break;
            case "product_name":

                break;
            case "department_name":

                break;
            case "price":

                break;
            case "stock_quantity":

            default:
                console.log("we dont have it");
        }
    
    })
}

function check(id, inventory) {
    //for loop based on inventory.length
    for (i = 0; i < inventory.length; i++) {
        if (inventory[i].item_name === answer.choice) {
            return intentory[i]
            return null;
          }
    }
    
}

function howmany() {
    inquirer
    .prompt([
        if (quantity.item_id  < parseInt(answer.bid)){

        }
    ])
}
// once you get response
//parseint the answer = quantity
//*check if quantity > product.stock_quantity
//*makePurchase(product, quantity)
function makePurchase(product, quantity) {
    //query update products set stock_quantity = stock_quantity - ?
    //Where item_id =?
    //[quanity, product.item_id]
}