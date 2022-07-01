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
	name VARCHAR(150) NOT NULL,
	location VARCHAR(150) NOT NULL,
	extra_context JSON,
	PRIMARY KEY(warehouse_id),
	FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

/*STORES(SID INTEGER,STORE_NAME CHAR(20), LOCATION_CITYCHAR(20))*/
CREATE TABLE stores (
	store_id INT NOT NULL AUTO_INCREMENT,
	warehouse_id INT,
	name VARCHAR(150) NOT NULL,
	location_city INT NOT NULL,
	PRIMARY KEY(store_id),  
	FOREIGN KEY(warehouse_id) REFERENCES warehouses(warehouse_id),
	FOREIGN KEY(location_city) REFERENCES cities(city_id)
);