using Core.Models;

namespace DatabaseProvider.Repositories.Abstractions
{
    public interface IClientRepository : IRepository<Client>
    {
        public List<Client> GetAll();
        public Client GetById(int id);
        public List<Client> GetByFirstName(string firstName);
        public List<Client> GetByLastName(string lastName);
    }
}
