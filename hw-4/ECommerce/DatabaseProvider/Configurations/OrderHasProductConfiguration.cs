using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configuration
{
    public class OrderHasProductConfiguration : IEntityTypeConfiguration<OrderHasProduct>
    {
        public void Configure(EntityTypeBuilder<OrderHasProduct> builder)
        {
            builder.ToTable("OrderHasProduct").HasKey(ohp => ohp.Id);

            builder.Property(ohp => ohp.Quantity).IsRequired();

            builder.HasOne(ohp => ohp.Order).WithMany().HasForeignKey(ohp => ohp.OrderId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(ohp => ohp.Product).WithMany().HasForeignKey(ohp => ohp.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
