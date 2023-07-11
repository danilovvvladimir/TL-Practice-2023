USE ECommerceDB;

-- OrderStatus <===
--INSERT INTO OrderStatus (Message)
--VALUES (N'Заказ создан')

--INSERT INTO OrderStatus (Message)
--VALUES (N'Заказ в обработке')

--INSERT INTO OrderStatus (Message)
--VALUES (N'Заказ отправлен')

--INSERT INTO OrderStatus (Message)
--VALUES (N'Заказ доставлен')

-- Product <===
--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	'IPhone 14', 
--	N'Мощный смартфон с высокопроизводительным процессором, большим дисплеем и продвинутыми функциями.',
--	89999,
--	3
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'HUAWEI MateBook D 15', 
--	N'Портативный ноутбук с быстрым процессором, большим объемом памяти и долгим временем работы.',
--	49999,
--	10
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'Кофемашина Deluxe', 
--	N'Автоматическая кофемашина с широким выбором напитков: эспрессо, капуччино, латте и другие.',
--	14999,
--	23
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'Спортивные наушники SoundSport', 
--	N'Беспроводные спортивные наушники с отличным качеством звука и комфортной посадкой.',
--	2999,
--	8
--)

--INSERT INTO Product (Name, Description, Price, Quantity)
--VALUES (
--	N'Микрофон проводной Audio-Technica AT2020', 
--	N'Микрофон Audio-technica AT2020 – студийная модель с конденсаторным капсюлем.',
--	11499,
--	14
--)

-- Client <===

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Владимир', N'Александров', 'vladimiralex66@gmail.com', N'Россия, Москва')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Мария', N'Волгова', 'marynemari@gmail.com', N'Россия, Казань')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Мартин', N'Иден', 'martinswimmer123@gmail.com', N'Казахстан, Астана')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Eddie', N'Morra', 'limitlesseddie@gmail.com', N'Россия, Йошкар-Ола')

--INSERT INTO Client (FirstName, LastName, Email, Address)
--VALUES (N'Анастасия', N'Сорокина', 'soroka02anas@gmail.com', N'Россия, Уфа')

-- Order <===

-- Notebook
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (49999, N'Россия, Уфа, Мира 43','2023-07-11', 1, 2)

-- 2 headphones
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (5998, N'Россия, Казань, Ленина 4','2023-07-11', 2, 1)

-- coffe and iphone
--INSERT INTO [Order] (TotalPrice, Address, DeliveryDate, ClientId, OrderStatusId)
--VALUES (104998, N'Россия, Казань, Ленина 4','2023-07-10', 3, 4)

-- OrderHasProduct <===

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (1, 2, 1)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (2, 4, 2)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (3, 1, 1)

--INSERT INTO OrderHasProduct (OrderId, ProductId, Quantity)
--VALUES (3, 3, 1)
