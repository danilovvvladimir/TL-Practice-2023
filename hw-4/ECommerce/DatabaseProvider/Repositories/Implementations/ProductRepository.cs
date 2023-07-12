using Core.Models;
using DatabaseProvider.Repositories.Abstractions;

namespace DatabaseProvider.Repositories.Implementations
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationContext context)
           : base(context)
        {
        }

        public List<Product> GetAll()
        {
            return Entities.ToList();
        }

        public Product GetById(int id)
        {
            return Entities.Where(p => p.Id == id).FirstOrDefault();
        }

        public List<Product> GetByName(string name)
        {
            return Entities.Where(p => p.Name == name).ToList();
        }
    }
}
