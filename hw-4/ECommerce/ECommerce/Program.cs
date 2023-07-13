using Core.Models;
using DatabaseProvider.Repositories;
using DatabaseProvider.Repositories.Abstractions;
using DatabaseProvider.Repositories.Implementations;

namespace ECommerce
{
    public class Program
    {
        private const string ConnectionString =
            "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=ECommerce;Pooling=true;Integrated Security=SSPI";

        private static ApplicationContext _applicationContext;

        private static IClientRepository _clientRepository;
        private static IProductRepository _productRepository;
        private static IOrderRepository _orderRepository;
        private static IOrderStatusRepository _orderStatusRepository;
        private static IOrderHasProductRepository _orderHasProductRepository;

        public static void Main(string[] args)
        {
            _applicationContext = new ApplicationContext(ConnectionString);
            _clientRepository = new ClientRepository(_applicationContext);
            _productRepository = new ProductRepository(_applicationContext);
            _orderRepository = new OrderRepository(_applicationContext);
            _orderStatusRepository = new OrderStatusRepository(_applicationContext);
            _orderHasProductRepository = new OrderHasProductRepository(_applicationContext);

            ProcessCommands();
        }

        public static void ProcessCommands()
        {
            while (true)
            {
                Console.Write("Enter command: ");
                string[] commandLine = Console.ReadLine().Split(' ');
                string command = commandLine[0];
                List<string> parameters = commandLine.Skip(1).ToList();
                switch (command)
                {
                    case "exit":
                        return;
                    case "help":
                        PrintHelpMenu();
                        break;
                    case "clear":
                        Console.Clear();
                        break;
                    case "add-client":
                        AddClient(parameters);
                        break;
                    case "delete-client":
                        DeleteClient(parameters);
                        break;
                    case "get-client-by-id":
                        GetClientById(parameters);
                        break;
                    case "get-clients-by-firstname":
                        GetClientsByFirstName(parameters);
                        break;
                    case "get-clients-by-lastname":
                        GetClientsByLastName(parameters);
                        break;
                    case "get-all-clients":
                        GetAllClients();
                        break;
                    // Product
                    case "add-product":
                        AddProduct(parameters);
                        break;
                    case "delete-product":
                        DeleteProduct(parameters);
                        break;
                    case "get-all-products":
                        GetAllProducts();
                        break;
                    case "get-product-by-id":
                        GetProductById(parameters);
                        break;
                    case "get-product-by-name":
                        GetProductsByName(parameters);
                        break;
                    // Order
                    case "add-order":
                        AddOrder(parameters);
                        break;
                    case "delete-order":
                        DeleteOrder(parameters);
                        break;
                    case "get-all-orders":
                        GetAllOrders();
                        break;
                    case "get-order-by-id":
                        GetOrderById(parameters);
                        break;
                    case "get-orders-by-client-id":
                        GetProductByClientId(parameters);
                        break;
                    case "get-orders-by-status-id":
                        GetOrderByOrderStatusId(parameters);
                        break;
                    // OrderStatus
                    case "add-order-status":
                        AddOrderStatus(parameters);
                        break;
                    case "delete-order-status":
                        DeleteOrderStatus(parameters);
                        break;
                    case "get-all-order-statuses":
                        GetAllOrderStatuses();
                        break;
                    case "get-order-status-by-id":
                        GetOrderStatusById(parameters);
                        break;
                    // OrderHasProduct
                    case "add-ohp":
                        AddOHP(parameters);
                        break;
                    case "delete-ohp":
                        DeleteOHP(parameters);
                        break;
                    case "get-all-ohp":
                        GetAllOHPs();
                        break;
                    case "get-ohp-by-id":
                        GetOHPById(parameters);
                        break;
                    case "get-ohps-by-client-id":
                        GetOHPByClientId(parameters);
                        break;
                    case "get-ohps-by-product-id":
                        GetOHPByProductId(parameters);
                        break;
                    case "get-ohps-by-order-id":
                        GetOHPByOrderId(parameters);
                        break;
                    default:
                        Console.WriteLine("Unknown command");
                        break;
                }
            }
        }

        public static void PrintHelpMenu()
        {
            Console.WriteLine("=== HELP COMMANDS ===");
            Console.WriteLine("General:");
            Console.WriteLine("- help");
            Console.WriteLine("- clear");
            Console.WriteLine("- exit");

            Console.WriteLine("Client:");
            Console.WriteLine("- add-client <firstname> <lastname> <email> <address>");
            Console.WriteLine("- delete-client <client-id>");
            Console.WriteLine("- get-all-clients");
            Console.WriteLine("- get-client-by-id <client-id>");
            Console.WriteLine("- get-clients-by-firstName <firstName>");
            Console.WriteLine("- get-clients-by-lastName <lastName>");

            Console.WriteLine("Product:");
            Console.WriteLine("- add-product <name> <description> <price> <quantity>");
            Console.WriteLine("- delete-product <product-id>");
            Console.WriteLine("- get-all-products");
            Console.WriteLine("- get-product-by-id <product-id>");
            Console.WriteLine("- get-products-by-name <name>");

            Console.WriteLine("OrderStatus:");
            Console.WriteLine("- add-order-status <message>");
            Console.WriteLine("- delete-order-status <order-status-id>");
            Console.WriteLine("- get-all-order-statuses");
            Console.WriteLine("- get-order-status-by-id <order-status-id>");

            Console.WriteLine("Order:");
            Console.WriteLine("" +
                "- add-order <total-price> <delivery-date> " +
                "<address> <client-id> <order-status-id>");
            Console.WriteLine("- delete-order <order-id>");
            Console.WriteLine("- get-all-orders");
            Console.WriteLine("- get-order-by-id <order-id>");
            Console.WriteLine("- get-orders-by-client-id <client-id>");
            Console.WriteLine("- get-orders-by-order-status-id <order-status-id>");

            Console.WriteLine("OrderHasProduct (ohp):");
            Console.WriteLine("" +
                "- add-ohp <quantity> <product-id> <order-id>");
            Console.WriteLine("- delete-ohp <ohp-id>");
            Console.WriteLine("- get-all-ohps");
            Console.WriteLine("- get-ohp-by-id <ohp-id>");
            Console.WriteLine("- get-ohps-by-client-id <client-id>");
            Console.WriteLine("- get-ohps-by-order-id <order-id>");
            Console.WriteLine("- get-ohps-by-product-id <product-id>");
        }

        // Client Methods
        public static void AddClient(List<string> parameters)
        {
            Client client = new Client
            {
                FirstName = parameters[0],
                LastName = parameters[1],
                Email = parameters[2],
                Address = parameters[3],
            };
            _clientRepository.Add(client);
            _clientRepository.SaveChanges();
        }

        public static void GetAllClients()
        {
            List<Client> clientList = _clientRepository.GetAll();

            if (clientList.Count == 0)
            {
                Console.WriteLine("There are no clients yet.");
            }

            foreach (Client client in clientList)
            {
                Console.WriteLine(client);
            }
        }

        public static void GetClientById(List<string> parameters)
        {
            int clientId = int.Parse(parameters[0]);
            Client client = _clientRepository.GetById(clientId);

            if (client == null)
            {
                Console.WriteLine("Client with this ID is not found.");
                return;
            }

            Console.WriteLine(client);
        }

        public static void GetClientsByFirstName(List<string> parameters)
        {
            string clientFirstName = parameters[0];

            List<Client> clientList = _clientRepository.GetByFirstName(clientFirstName);

            if (clientList.Count == 0)
            {
                Console.WriteLine("Clients with this FirstName are not found.");
                return;
            }

            foreach (Client client in clientList)
            {
                Console.WriteLine(client);
            }
        }

        public static void GetClientsByLastName(List<string> parameters)
        {
            string clientLastName = parameters[0];

            List<Client> clientList = _clientRepository.GetByFirstName(clientLastName);

            if (clientList.Count == 0)
            {
                Console.WriteLine("Clients with this LastName are not found.");
                return;
            }

            foreach (Client client in clientList)
            {
                Console.WriteLine(client);
            }
        }

        public static void DeleteClient(List<string> parameters)
        {
            int clientId = int.Parse(parameters[0]);
            Client client = _clientRepository.GetById(clientId);
            _clientRepository.Remove(client);
            _clientRepository.SaveChanges();
        }

        // Product Methods
        public static void AddProduct(List<string> parameters)
        {
            Product product = new Product
            {
                Name = parameters[0],
                Description = parameters[1],
                Price = Decimal.Parse(parameters[2]),
                Quantity = int.Parse(parameters[3]),
            };

            _productRepository.Add(product);
            _productRepository.SaveChanges();
        }

        public static void GetAllProducts()
        {
            List<Product> productList = _productRepository.GetAll();

            if (productList.Count == 0)
            {
                Console.WriteLine("There are no products yet.");
            }

            foreach (Product product in productList)
            {
                Console.WriteLine(product);
            }
        }

        public static void GetProductById(List<string> parameters)
        {
            int productId = int.Parse(parameters[0]);
            Product product = _productRepository.GetById(productId);

            if (product == null)
            {
                Console.WriteLine("Product with this ID is not found.");
                return;
            }

            Console.WriteLine(product);
        }

        public static void GetProductsByName(List<string> parameters)
        {
            string productName = parameters[0];

            List<Product> productList = _productRepository.GetByName(productName);

            if (productList.Count == 0)
            {
                Console.WriteLine("Products with this name are not found.");
                return;
            }

            foreach (Product product in productList)
            {
                Console.WriteLine(product);
            }
        }

        public static void DeleteProduct(List<string> parameters)
        {
            int productId = int.Parse(parameters[0]);
            Product product = _productRepository.GetById(productId);
            _productRepository.Remove(product);
            _productRepository.SaveChanges();
        }

        // Order Methods

        public static void AddOrder(List<string> parameters)
        {
            Order order = new Order
            {
                TotalPrice = Decimal.Parse(parameters[0]),
                DeliveryDate = DateTime.Parse(parameters[1]),
                Address = parameters[2],
                ClientId = int.Parse(parameters[3]),
                Client = _clientRepository.GetById(int.Parse(parameters[3])),
                OrderStatusId = int.Parse(parameters[4]),
                OrderStatus = _orderStatusRepository.GetById(int.Parse(parameters[4])),
            };

            _orderRepository.Add(order);
            _orderRepository.SaveChanges();
        }

        public static void GetAllOrders()
        {
            List<Order> orderList = _orderRepository.GetAll();

            if (orderList.Count == 0)
            {
                Console.WriteLine("There are no orders yet.");
            }

            foreach (Order order in orderList)
            {
                Console.WriteLine(order);
            }
        }

        public static void GetOrderById(List<string> parameters)
        {
            int orderId = int.Parse(parameters[0]);
            Order order = _orderRepository.GetById(orderId);

            if (order == null)
            {
                Console.WriteLine("Order with this ID is not found.");
                return;
            }

            Console.WriteLine(order);
        }

        public static void GetOrderByOrderStatusId(List<string> parameters)
        {
            int orderStatusId = int.Parse(parameters[0]);

            List<Order> orderList = _orderRepository.GetByOrderStatusId(orderStatusId);

            if (orderList.Count == 0)
            {
                Console.WriteLine("Orders with this status are not found.");
                return;
            }

            foreach (Order order in orderList)
            {
                Console.WriteLine(order);
            }
        }

        public static void GetProductByClientId(List<string> parameters)
        {
            int clientId = int.Parse(parameters[0]);

            List<Order> orderList = _orderRepository.GetByClientId(clientId);

            if (orderList.Count == 0)
            {
                Console.WriteLine("Orders with this client are not found.");
                return;
            }

            foreach (Order order in orderList)
            {
                Console.WriteLine(order);
            }
        }

        public static void DeleteOrder(List<string> parameters)
        {
            int orderId = int.Parse(parameters[0]);
            Order order = _orderRepository.GetById(orderId);
            _orderRepository.Remove(order);
            _orderRepository.SaveChanges();
        }

        // OrderStatus Methods

        public static void AddOrderStatus(List<string> parameters)
        {
            OrderStatus orderStatus = new OrderStatus
            {
                Message = parameters[0],
            };

            _orderStatusRepository.Add(orderStatus);
            _orderStatusRepository.SaveChanges();
        }

        public static void GetAllOrderStatuses()
        {
            List<OrderStatus> orderStatusList = _orderStatusRepository.GetAll();

            if (orderStatusList.Count == 0)
            {
                Console.WriteLine("There are no order-statuses yet.");
            }

            foreach (OrderStatus orderStatus in orderStatusList)
            {
                Console.WriteLine(orderStatus);
            }
        }

        public static void GetOrderStatusById(List<string> parameters)
        {
            int orderStatusId = int.Parse(parameters[0]);
            OrderStatus orderStatus = _orderStatusRepository.GetById(orderStatusId);

            if (orderStatus == null)
            {
                Console.WriteLine("Order-Status with this ID is not found.");
                return;
            }

            Console.WriteLine(orderStatus);
        }

        public static void DeleteOrderStatus(List<string> parameters)
        {
            int orderStatusId = int.Parse(parameters[0]);
            OrderStatus orderStatus = _orderStatusRepository.GetById(orderStatusId);
            _orderStatusRepository.Remove(orderStatus);
            _orderStatusRepository.SaveChanges();
        }

        // OrderHasProduct Methods

        public static void AddOHP(List<string> parameters)
        {
            OrderHasProduct ohp = new OrderHasProduct
            {
                Quantity = int.Parse(parameters[0]),
                ProductId = int.Parse(parameters[1]),
                Product = _productRepository.GetById(int.Parse(parameters[1])),
                OrderId = int.Parse(parameters[2]),
                Order = _orderRepository.GetById(int.Parse(parameters[2])),
            };

            _orderHasProductRepository.Add(ohp);
            _orderHasProductRepository.SaveChanges();
        }

        public static void GetAllOHPs()
        {
            List<OrderHasProduct> ohpList = _orderHasProductRepository.GetAll();

            if (ohpList.Count == 0)
            {
                Console.WriteLine("There are no order-has-product yet.");
            }

            foreach (OrderHasProduct ohp in ohpList)
            {
                Console.WriteLine(ohp);
            }
        }

        public static void GetOHPById(List<string> parameters)
        {
            int ohpId = int.Parse(parameters[0]);
            OrderHasProduct ohp = _orderHasProductRepository.GetById(ohpId);

            if (ohp == null)
            {
                Console.WriteLine("Order-has-product with this ID is not found.");
                return;
            }

            Console.WriteLine(ohp);
        }

        public static void GetOHPByOrderId(List<string> parameters)
        {
            int orderId = int.Parse(parameters[0]);

            List<OrderHasProduct> ohpList = _orderHasProductRepository.GetByOrderId(orderId);

            if (ohpList.Count == 0)
            {
                Console.WriteLine("Order-has-product's with this order are not found.");
                return;
            }

            foreach (OrderHasProduct ohp in ohpList)
            {
                Console.WriteLine(ohp);
            }
        }

        public static void GetOHPByProductId(List<string> parameters)
        {
            int productId = int.Parse(parameters[0]);

            List<OrderHasProduct> ohpList = _orderHasProductRepository.GetByProductId(productId);

            if (ohpList.Count == 0)
            {
                Console.WriteLine("Order-has-product's with this product are not found.");
                return;
            }

            foreach (OrderHasProduct ohp in ohpList)
            {
                Console.WriteLine(ohp);
            }
        }

        public static void GetOHPByClientId(List<string> parameters)
        {
            int clientId = int.Parse(parameters[0]);

            List<OrderHasProduct> ohpList = _orderHasProductRepository.GetByClientId(clientId);

            if (ohpList.Count == 0)
            {
                Console.WriteLine("Order-has-product's with this client are not found.");
                return;
            }

            foreach (OrderHasProduct ohp in ohpList)
            {
                Console.WriteLine(ohp);
            }
        }

        public static void DeleteOHP(List<string> parameters)
        {
            int ohpId = int.Parse(parameters[0]);
            OrderHasProduct ohp = _orderHasProductRepository.GetById(ohpId);
            _orderHasProductRepository.Remove(ohp);
            _orderHasProductRepository.SaveChanges();
        }
    }
}