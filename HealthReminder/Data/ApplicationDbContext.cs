using HealthReminder.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthReminder.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
                
        }

        public DbSet<Patient> Patients { get; set; }
    }
}
