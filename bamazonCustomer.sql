DROP TABLE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price INT default 0,
stock_quantity INT default 0,
PRIMARY KEY (id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Screwdriver", "Tools", 5, 50),
("Wrench", "Tools", 10, 60),
("Hammer", "Tools", 10, 50),
("Oil", "Engine Liquid", 10, 30),
("Engine Coolant", "Engine Liquid", 20, 25),
("Screws", "Hardware", 10, 50),
("Towels" "Housewares", 5, 50 ),
("Batteries", "Housewares", 10, 50),
("Lightbulb", "Electrical", 8, 50),
("Drill", "Power Tools", 80, 20),

SELECT * FROM products;

