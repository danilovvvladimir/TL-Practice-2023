using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configuration
{
    public class OrderHasProductConfiguration
    {
        public void Configure(EntityTypeBuilder<OrderHasProduct> builder)
        {
            builder.ToTable("OrderHasProduct").HasKey(ohs => ohs.Id);

            builder.Property(ohs => ohs.Quantity).IsRequired();

            builder.HasOne(ohs => ohs.Order).WithMany().HasForeignKey(ohs => ohs.OrderId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(ohs => ohs.Product).WithMany().HasForeignKey(ohs => ohs.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
