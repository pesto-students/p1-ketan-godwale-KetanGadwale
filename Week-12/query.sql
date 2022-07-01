/*Find the item that has minimum weight*/
SELECT * FROM items ORDER BY weight LIMIT 1;
/*OR*/
SELECT * FROM items WHERE weight = (SELECT MIN(weight) FROM items);

/*Find the different warehouses in “Pune”*/
SELECT warehouse.warehouse_id, warehouse.name, warehouse.location, warehouse.extra_context, cities.city
FROM warehouse JOIN cities 
ON warehouse.city_id = cities.city_id
WHERE cities.city = 'PUNE';
