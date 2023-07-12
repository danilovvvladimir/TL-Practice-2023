USE ECommerceDB;

UPDATE [Client] SET FirstName = 'Marry' WHERE ClientId = 2;

UPDATE [Product] SET Quantity = 17 WHERE Name LIKE 'Wired%';

UPDATE [Order] SET Address = 'Russia, Ufa, Mira 42' WHERE ClientId = 1 AND OrderStatusId = 2;

UPDATE [OrderStatus] SET Message = 'Delivered' WHERE OrderStatusId = 2 AND Message IS NOT NULL;

UPDATE [OrderHasProduct] SET Quantity = 1 WHERE OrderProductId = 1 AND OrderId < 2;