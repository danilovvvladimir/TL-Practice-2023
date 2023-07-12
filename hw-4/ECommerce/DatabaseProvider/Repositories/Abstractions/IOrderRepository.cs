using Core.Models;

namespace DatabaseProvider.Repositories.Abstractions
{
    public interface IOrderRepository : IRepository<Order>
    {
        public List<Order> GetAll();
        public Order GetById(int id);
        public List<Order> GetByClientId(int clientId);
        public List<Order> GetByOrderStatusId(int orderStatusId);
    }
}
