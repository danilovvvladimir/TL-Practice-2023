USE ECommerceDB;

SELECT *
FROM OrderHasProduct;

UPDATE Client SET FirstName = N'�����' WHERE ClientId = 2;

UPDATE Product SET Quantity = 17 WHERE Name LIKE '��������%';

UPDATE [Order] SET Address = N'������, ���, ���� 42' WHERE ClientId = 1 AND OrderStatusId = 2;

UPDATE OrderStatus SET Message = N'����� ��������������' WHERE OrderStatusId = 2 AND Message IS NOT NULL;

UPDATE OrderHasProduct SET Quantity = 1 WHERE OrderProductId = 1 AND OrderId < 2;