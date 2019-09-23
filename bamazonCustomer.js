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

var activeSelection

function loadProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res)
        askCustomerWhatTheyWant();
        // // Log all results of the SELECT statement

        // console.log(res);
        // connection.end();
    });
}

function askCustomerWhatTheyWant() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "choice",
                message: "What's id of what you want"
            }
        ]).then(function(val) {
            var userChoice = val.choice
            connection.query("SELECT * FROM products WHERE item_id = ?", [userChoice],  function(err, result, fields) {
                if (err) throw err;
                activeSelection = result[0]
                check()
            });
        })
}

function check() {
    inquirer.prompt(
        [ 
        { 
            type: "input",
            name: "quantity",
            message: "how many units of the product they would like to buy?"
        }
    ]).then(function(val) {
        var userChoice = val.quantity
        // check if userChoice <= stock quantity
        if (userChoice <= activeSelection.stock_quantity) {
         // This purchase is valid
         connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [userChoice, activeSelection.item_id], function (err, response) {
             console.log("Purchase Approved! You just bought " + userChoice + " " + activeSelection.product_name)
             loadProducts()
         })
        } else { 
            console.log("Insufficient quantity.")
        }
        });
}

// function howmany(product) {
//     inquirer.prompt([{
//             type: "input",
//             name: "quantity",
//             message: "how many would you like?"
//         }]).then(function(res) {
//             console.log(res)
//             if (quantity > stock_quantity) {
//                 console.log("we do not have enough")
//                 loadProducts()

//             } else {
//                 makePurchase(product, quantity)
//             }

//         })
// }
// once you get response
//parseint the answer = quantity
//*check if quantity > product.stock_quantity
//*makePurchase(product, quantity)


// function makePurchase(product, quantity) {
//     //query update products set stock_quantity = stock_quantity - ?
//     //Where item_id =?
//     //[quanity, product.item_id]
// }