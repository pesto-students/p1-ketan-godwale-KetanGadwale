/*Create database */
CREATE DATABASE warehouse;
USE warehouse;

/*CITIES(CITY CHAR(20),STATE CHAR(20))*/
CREATE TABLE cities(
	city_id INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    PRIMARY KEY(city_id)
);

/*WAREHOUSES(WID INTEGER,WNAME CHAR(30),LOCATIONCHAR(20),EXTRA CONTEXT json)*/
CREATE TABLE warehouses (
	warehouse_id INT NOT NULL AUTO_INCREMENT,
	city_id INT NOT NULL,
	name VARCHAR(30) NOT NULL,
	location VARCHAR(20) NOT NULL,
	extra_context JSON,
	PRIMARY KEY(warehouse_id),
	FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

/*STORES(SID INTEGER,STORE_NAME CHAR(20), LOCATION_CITYCHAR(20))*/
CREATE TABLE stores (
	store_id INT NOT NULL AUTO_INCREMENT,
	warehouse_id INT,
	name VARCHAR(20) NOT NULL,
	location_city INT NOT NULL,
	PRIMARY KEY(store_id),  
	FOREIGN KEY(warehouse_id) REFERENCES warehouses(warehouse_id),
	FOREIGN KEY(location_city) REFERENCES cities(city_id)
);

/*CUSTOMER(CNO INTEGER, CNAME CHAR(50),ADDR VARCHAR(50),CU_CITY CHAR(20))*/
CREATE TABLE customers (
	customer_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	address VARCHAR(50) NOT NULL,
	city_id INT NOT NULL,
	PRIMARY KEY(customer_id),
	FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

/*ORDERS(ONO INT,ODATE DATE)*/
CREATE TABLE orders (
	order_no INT NOT NULL AUTO_INCREMENT,
	order_date DATE DEFAULT (CURRENT_DATE),
	customer_id INT NOT NULL,
	PRIMARY KEY(order_no),
	FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

/*ITEMS(ITEMNO INTEGER,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2),COST DECIMAL(5,2) )*/
CREATE TABLE items (
	item_no INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(30) NOT NULL,
	description TEXT NOT NULL,
	weight DECIMAL(5,2),
	cost DECIMAL(5,2),
	PRIMARY KEY(item_no)
);