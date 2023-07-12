using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configuration
{
    public class OrderConfiguration
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Order").HasKey(o => o.Id);

            builder.Property(o => o.TotalPrice).IsRequired();
            builder.Property(o => o.Address).IsRequired().HasMaxLength(100);
            builder.Property(o => o.DeliveryDate).IsRequired();

            builder.HasOne(o => o.Client).WithMany().HasForeignKey(o => o.ClientId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(o => o.OrderStatus).WithMany().HasForeignKey(o => o.OrderStatusId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
