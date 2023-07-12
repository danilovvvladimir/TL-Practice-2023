using Core.Models;

namespace DatabaseProvider.Repositories.Abstractions
{
    public interface IOrderStatusRepository : IRepository<OrderStatus>
    {
        public List<OrderStatus> GetAll();
        public OrderStatus GetById(int id);
    }
}
