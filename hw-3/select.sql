USE ECommerceDB;

SELECT *
FROM Client;

SELECT *
FROM Client
WHERE FirstName = 'Владимир';

SELECT *
FROM Product
WHERE Price > 40000;

SELECT *
FROM Product
WHERE Price > 40000 AND Quantity > 5;

SELECT *
FROM Product
WHERE Price > 40000 OR Quantity > 15;

SELECT *
FROM Product
WHERE Quantity IN (8, 10);

SELECT *
FROM Product
WHERE Price BETWEEN 40000 AND 50000;

SELECT *
FROM Product
WHERE Price NOT BETWEEN 40000 AND 50000;

SELECT *
FROM Product
WHERE Name LIKE 'I%';

SELECT TOP 3 *
FROM Product
ORDER BY Price DESC;

SELECT *
FROM Product
ORDER BY Price DESC;

SELECT *
FROM [Order]

SELECT 
	DeliveryDate,
	count(OrderId) as OrdersForDate
FROM [Order]
GROUP BY DeliveryDate

SELECT 
	DeliveryDate,
	count(OrderId) as OrdersForDate
FROM [Order]
GROUP BY DeliveryDate
HAVING count(OrderId) = 2
