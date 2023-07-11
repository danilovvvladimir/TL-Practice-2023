USE ECommerceDB;

SELECT *
FROM [Order]
JOIN Client ON [Order].ClientId = Client.ClientId;

-- Clients with no orders (using left join)
SELECT *
FROM Client
LEFT JOIN [Order] ON [Order].ClientId = Client.ClientId;

-- Clients with no orders (using right join)
SELECT *
FROM [Order]
RIGHT JOIN Client ON [Order].ClientId = Client.ClientId;

SELECT
	[Order].TotalPrice,
	[Order].Address as DeliveryAddress,
	[Order].DeliveryDate,
	OrderStatus.Message as StatusMessage,
	Product.Name as ProductName,
	Client.FirstName + ' ' + Client.LastName as ClientFullName
FROM [OrderHasProduct]
JOIN [Order] ON [OrderHasProduct].OrderId = [Order].OrderId
JOIN OrderStatus ON OrderStatus.OrderStatusId = [Order].OrderStatusId
JOIN Product ON Product.ProductId = [OrderHasProduct].ProductId
JOIN Client ON [Order].ClientId = Client.ClientId