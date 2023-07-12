namespace Core.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public override string ToString()
        {
            return $"{FirstName} {LastName} ({Email})";
        }
    }
}
