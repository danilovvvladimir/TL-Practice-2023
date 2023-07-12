USE EcommerceDB;

CREATE TABLE [Client] (
	ClientId int IDENTITY (1,1) CONSTRAINT PK_Client PRIMARY KEY,
	FirstName nvarchar(50) NOT NULL,
	LastName nvarchar(50) NOT NULL,
	Email nvarchar(100) NOT NULL,
	Address nvarchar(100) NOT NULL,
);

CREATE TABLE [Product] (
	ProductId int IDENTITY (1,1) CONSTRAINT PK_Product PRIMARY KEY,
	Name nvarchar(50) NOT NULL,
	Description nvarchar(100),
	Price money NOT NULL,
	Quantity int NOT NULL
)

CREATE TABLE [OrderStatus] (
	OrderStatusId int IDENTITY (1,1) CONSTRAINT PK_OrderStatus PRIMARY KEY,
	Message nvarchar(100) NOT NULL,
)

CREATE TABLE [Order] (
	OrderId int IDENTITY (1,1) CONSTRAINT PK_Order PRIMARY KEY,
	TotalPrice money NOT NULL,
	Address nvarchar(100) NOT NULL,
	DeliveryDate date NOT NULL,
	ClientId int CONSTRAINT FK_Order_ClientId FOREIGN KEY (ClientId) REFERENCES Client(ClientId)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	OrderStatusId int CONSTRAINT FK_Order_OrderStatusId FOREIGN KEY (OrderStatusId) REFERENCES [OrderStatus](OrderStatusId)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
)

CREATE TABLE [OrderHasProduct] (
    OrderHasProductId int IDENTITY (1,1) CONSTRAINT PK_OrderHasProduct PRIMARY KEY,
    Quantity int NOT NULL,
    OrderId int CONSTRAINT FK_OrderProduct_Order FOREIGN KEY (OrderId) REFERENCES [Order](OrderId)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
    ProductId int CONSTRAINT FK_OrderProduct_Product FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
);

