using Core.Models;
using DatabaseProvider.Repositories.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations
{
    public class OrderHasProductRepository : Repository<OrderHasProduct>, IOrderHasProductRepository
    {
        public OrderHasProductRepository(ApplicationContext context)
          : base(context)
        {
        }

        public List<OrderHasProduct> GetAll()
        {
            return Entities.ToList();
        }

        public List<OrderHasProduct> GetByClientId(int clientId)
        {
            return Entities.Include(ohp => ohp.Order).Where(o => o.Order.ClientId == clientId).ToList();
        }

        public List<OrderHasProduct> GetByOrderId(int orderId)
        {
            return Entities.Where(ohp => ohp.OrderId == orderId).ToList();
        }

        public OrderHasProduct GetById(int id)
        {
            return Entities.Where(ohp => ohp.Id == id).FirstOrDefault();
        }

        public List<OrderHasProduct> GetByProductId(int productId)
        {
            return Entities.Where(ohp => ohp.ProductId == productId).ToList();
        }
    }
}
