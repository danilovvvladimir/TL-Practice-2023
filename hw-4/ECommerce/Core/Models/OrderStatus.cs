namespace Core.Models
{
    public class OrderStatus
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public override string ToString()
        {
            return Message;
        }
    }
}
