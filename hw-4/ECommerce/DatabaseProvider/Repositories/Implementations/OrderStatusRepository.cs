using Core.Models;
using DatabaseProvider.Repositories.Abstractions;

namespace DatabaseProvider.Repositories.Implementations
{
    public class OrderStatusRepository : Repository<OrderStatus>, IOrderStatusRepository
    {
        public OrderStatusRepository(ApplicationContext context)
            : base(context)
        {
        }

        public List<OrderStatus> GetAll()
        {
            return Entities.ToList();
        }

        public OrderStatus GetById(int id)
        {
            return Entities.Where(os => os.Id == id).FirstOrDefault();
        }
    }
}
