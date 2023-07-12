using DatabaseProvider.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ECommerceMigrations
{
    public class ContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
    {
        public ApplicationContext CreateDbContext(string[] args)
        {
            string connectionString =
                "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=ECommerce;Pooling=true;Integrated Security=SSPI";
            var optionalBuilder = new DbContextOptionsBuilder<ApplicationContext>();

            optionalBuilder.UseSqlServer(connectionString,
                assembly => assembly.MigrationsAssembly("ECommerceMigrations"));

            return new ApplicationContext(optionalBuilder.Options);
        }
    }
}
