using HealthReminder.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthReminder.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opt) : base(opt)
        {
             
        }

        public DbSet<Bio> Bios { get; set; }    
        public DbSet<Drug> Drugs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Drug>(entity =>
            {
                entity.HasOne(d => d.Bio).WithMany(d => d.Drugs).HasForeignKey(d => d.BioId);
            });

             base.OnModelCreating(modelBuilder);
        }
    }
}
