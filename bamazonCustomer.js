var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
// connection stuff
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
   console.log(res);
   connection.end();
 });
}
function askCustomerWhatTheyWant(inventory){
 .prompt([
   {
     type: "input",
     name: "choice",
     message:"What's id of what you want"
   }
 ]).then(function(val){
   //grab val.choice and put in a constant  var choiceId = val.choice
   //check if you have the item requires another function
   //*check(choiceId, inventory)
   //*if(product){write function for how many}else {console log dont' have it}
 })
}
function check( id, inventory) {
 //for loop based on inventory.length
 //  with if statement if (invenotry[i].item_id === id){
   //return inventory[i]
   // return null;
}
function howmany( inquirer prompt)
// once you get response
 //parseint the answer = quantity
 //*check if quantity > product.stock_quantity
 //*makePurchase(product, quantity)
function makePurchase(product, quantity){
 //query update products set stock_quantity = stock_quantity - ?
 //Where item_id =?
 //[quanity, product.item_id]
}

