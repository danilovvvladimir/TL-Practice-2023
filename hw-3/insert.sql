USE ECommerceDB;

-- OrderStatus <===
--INSERT INTO OrderStatus (Message)
--VALUES (N'����� ������')

--INSERT INTO OrderStatus (Message)
--VALUES (N'����� � ���������')

--INSERT INTO OrderStatus (Message)
--VALUES (N'����� ���������')

--INSERT INTO OrderStatus (Message)
--VALUES (N'����� ���������')

-- Product <===
--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	'IPhone 14', 
--	N'������ �������� � ���������������������� �����������, ������� �������� � ������������ ���������.',
--	89999,
--	3
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'HUAWEI MateBook D 15', 
--	N'����������� ������� � ������� �����������, ������� ������� ������ � ������ �������� ������.',
--	49999,
--	10
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'���������� Deluxe', 
--	N'�������������� ���������� � ������� ������� ��������: ��������, ���������, ����� � ������.',
--	14999,
--	23
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'���������� �������� SoundSport', 
--	N'������������ ���������� �������� � �������� ��������� ����� � ���������� ��������.',
--	2999,
--	8
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'�������� ��������� Audio-Technica AT2020', 
--	N'�������� Audio-technica AT2020 � ��������� ������ � �������������� ��������.',
--	11499,
--	14
--)

-- Client <===

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'��������', N'�����������', 'vladimiralex66@gmail.com', N'������, ������')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'�����', N'�������', 'marynemari@gmail.com', N'������, ������')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'������', N'����', 'martinswimmer123@gmail.com', N'���������, ������')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Eddie', N'Morra', 'limitlesseddie@gmail.com', N'������, ������-���')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'���������', N'��������', 'soroka02anas@gmail.com', N'������, ���')

-- Order <===

-- Notebook
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (49999, N'������, ���, ���� 43','2023-07-11', 1, 2)

-- 2 headphones
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (5998, N'������, ������, ������ 4','2023-07-11', 2, 1)

-- coffe and iphone
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (104998, N'������, ������, ������ 4','2023-07-10', 3, 4)

-- OrderHasProduct <===

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (1, 2, 1)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (2, 4, 2)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (3, 1, 1)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (3, 3, 1)
