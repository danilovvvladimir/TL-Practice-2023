USE ECommerceDB;

SELECT *
FROM OrderHasProduct;

UPDATE Client SET FirstName = N'Мэрри' WHERE ClientId = 2;

UPDATE Product SET Quantity = 17 WHERE Name LIKE 'Микрофон%';

UPDATE [Order] SET Address = N'Россия, Уфа, Мира 42' WHERE ClientId = 1 AND OrderStatusId = 2;

UPDATE OrderStatus SET Message = N'Заказ обрабатывается' WHERE OrderStatusId = 2 AND Message IS NOT NULL;

UPDATE OrderHasProduct SET Quantity = 1 WHERE OrderProductId = 1 AND OrderId < 2;