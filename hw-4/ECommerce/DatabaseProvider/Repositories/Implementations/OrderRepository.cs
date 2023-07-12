using Core.Models;
using DatabaseProvider.Repositories.Abstractions;

namespace DatabaseProvider.Repositories.Implementations
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext context)
            : base(context)
        {
        }
        public List<Order> GetAll()
        {
            return Entities.ToList();
        }
        public Order GetById(int id)
        {
            return Entities.Where(o => o.Id == id).FirstOrDefault();
        }

        public List<Order> GetByClientId(int clientId)
        {
            return Entities.Where(o => o.ClientId == clientId).ToList();
        }

        public List<Order> GetByOrderStatusId(int orderStatusId)
        {
            return Entities.Where(o => o.OrderStatusId == orderStatusId).ToList();
        }
    }
}
