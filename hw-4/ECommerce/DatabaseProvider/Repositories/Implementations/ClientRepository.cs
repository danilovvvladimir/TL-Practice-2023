using Core.Models;
using DatabaseProvider.Repositories.Abstractions;

namespace DatabaseProvider.Repositories.Implementations
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(ApplicationContext context)
            : base(context)
        {
        }

        public List<Client> GetAll()
        {
            return Entities.ToList();
        }

        public Client GetById(int id)
        {
            return Entities.Where(c => c.Id == id).FirstOrDefault();
        }

        public List<Client> GetByFirstName(string firstName)
        {
            return Entities.Where(c => c.FirstName == firstName).ToList();
        }

        public List<Client> GetByLastName(string lastName)
        {
            return Entities.Where(c => c.LastName == lastName).ToList();
        }
    }
}
