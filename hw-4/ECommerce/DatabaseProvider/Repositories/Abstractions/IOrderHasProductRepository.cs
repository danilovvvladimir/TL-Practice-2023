using Core.Models;

namespace DatabaseProvider.Repositories.Abstractions
{
    public interface IOrderHasProductRepository : IRepository<OrderHasProduct>
    {
        public List<OrderHasProduct> GetAll();
        public OrderHasProduct GetById(int id);
        public List<OrderHasProduct> GetByClientId(int clientId);
        public List<OrderHasProduct> GetByOrderId(int orderId);
        public List<OrderHasProduct> GetByProductId(int productId);
    }
}
