USE ECommerceDB;

-- OrderStatus <===
INSERT INTO OrderStatus (Message)
VALUES ('Created')

INSERT INTO OrderStatus (Message)
VALUES ('Processing')

INSERT INTO OrderStatus (Message)
VALUES ('Sent')

INSERT INTO OrderStatus (Message)
VALUES ('Delivered')

-- Product <===
INSERT INTO Product (Name, Description, Price, Quantity)
VALUES (
	'IPhone 14', 
	'A powerful smartphone with a high-performance processor, a large display and advanced features.',
	89999,
	3
)

INSERT INTO Product (Name, Description, Price, Quantity)
VALUES (
	'HUAWEI MateBook D 15', 
	'A portable laptop with a fast processor, a large amount of memory and a long working time.',
	49999,
	10
)

INSERT INTO Product (Name, Description, Price, Quantity)
VALUES (
	'Coffee Machine Deluxe', 
	'Automatic coffee machine with a wide selection of drinks: espresso, cappuccino, latte and more.',
	14999,
	23
)

INSERT INTO Product (Name, Description, Price, Quantity)
VALUES (
	'Sport headphones SoundSport', 
	'Wireless sports headphones with excellent sound quality and a comfortable fit.',
	2999,
	8
)

INSERT INTO Product (Name, Description, Price, Quantity)
VALUES (
	'Wired microphone Audio-Technica AT2020', 
	'The Audio-technica AT2020 microphone is a studio model with a condenser capsule.',
	11499,
	14
)

-- Client <===

INSERT INTO Client (FirstName, LastName, Email, Address)
VALUES ('Vladimir', 'Alexandrov', 'vladimiralex66@gmail.com', 'Russia, Moscow')

INSERT INTO Client (FirstName, LastName, Email, Address)
VALUES ('Mariya', 'Volgova', 'marynemari@gmail.com', 'Russia, Kazan')

INSERT INTO Client (FirstName, LastName, Email, Address)
VALUES ('Martin', 'Iden', 'martinswimmer123@gmail.com', 'Kazakhstan, Astana')

INSERT INTO Client (FirstName, LastName, Email, Address)
VALUES ('Eddie', 'Morra', 'limitlesseddie@gmail.com', 'Russia, Yoshkar-Ola')

INSERT INTO Client (FirstName, LastName, Email, Address)
VALUES ('Anastasiya', 'Sorokina', 'soroka02anas@gmail.com', 'Russia, Ufa')

-- Order <===

-- Notebook
INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
VALUES (49999, 'Russia, Ufa, Mira 43','2023-07-11', 1, 2)

-- 2 headphones
INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
VALUES (5998, 'Russia, Kazan, Lenina 4','2023-07-11', 2, 1)

-- coffe and iphone
INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
VALUES (104998,'Russia, Yoshkar-Ola, Lenina 10','2023-07-10', 4, 4)

-- OrderHasProduct <===

INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
VALUES (1, 2, 1)

INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
VALUES (2, 4, 2)

INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
VALUES (3, 1, 1)

INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
VALUES (3, 3, 1)
