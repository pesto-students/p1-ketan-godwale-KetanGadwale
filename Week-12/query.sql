/*Find the item that has minimum weight*/
SELECT * FROM items ORDER BY weight LIMIT 1;
/*OR*/
SELECT * FROM items WHERE weight = (SELECT MIN(weight) FROM items);

/*Find the different warehouses in “Pune”*/
SELECT warehouses.warehouse_id, warehouses.name, warehouses.location, warehouses.extra_context, cities.city
FROM warehouses JOIN cities 
ON warehouses.city_id = cities.city_id
WHERE cities.city = 'PUNE';

/*Find the details of items ordered by a customer “Mr. Patil”.*/
SELECT items.item_name, items.description, items.weight, items.cost, customers.name, orders.order_date
FROM customers 
JOIN orders ON customers.customer_id = orders.customer_id
JOIN order_items ON order_items.order_id = orders.order_no
JOIN items ON items.item_no = order_items.item_id
WHERE customers.name = "Mr. Patil";

/*Find a Warehouse which has maximum stores*/
SELECT warehouses.name, warehouses.location, warehouses.extra_context, cities.city, cities.state
FROM warehouses 
JOIN cities ON cities.city_id = warehouses.city_id
WHERE warehouses.warehouse_id IN (
	SELECT warehouses.warehouse_id FROM (
		SELECT warehouses.warehouse_id, COUNT(stores.store_id) AS store_count
		FROM warehouses
		JOIN stores ON stores.warehouse_id = warehouses.warehouse_id
		GROUP BY warehouses.warehouse_id
		ORDER BY store_count DESC
		LIMIT 1
	) temporary_warehouse_data
);

/*Find an item which is ordered for a minimum number of times.*/
SELECT items.item_no, items.item_name, items.description, items.weight, items.cost, COUNT(item_id) AS item_count
FROM order_items
JOIN items ON order_items.item_id = items.item_no
GROUP BY items.item_no
ORDER BY item_count
LIMIT 1;

/*Find the detailed orders given by each customer.*/
SELECT * FROM customers
JOIN cities ON cities.city_id = customers.city_id
JOIN orders ON orders.customer_id = orders.customer_id
JOIN order_items ON orders.order_no = order_items.order_id
JOIN items ON items.item_no = order_items.item_id