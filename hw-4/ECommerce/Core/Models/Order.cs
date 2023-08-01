namespace Core.Models
{
    public class Order
    {
        public int Id { get; set; }
        public decimal TotalPrice { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string Address { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public int OrderStatusId { get; set; }
        public OrderStatus OrderStatus { get; set; }

        public override string ToString()
        {
            return $"{Client} - {OrderStatus} - {TotalPrice}";
        }
    }
}
