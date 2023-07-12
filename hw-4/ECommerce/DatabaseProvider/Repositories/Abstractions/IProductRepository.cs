using Core.Models;

namespace DatabaseProvider.Repositories.Abstractions
{
    public interface IProductRepository : IRepository<Product>
    {
        public List<Product> GetAll();
        public Product GetById(int id);
        public List<Product> GetByName(string name);
    }
}
