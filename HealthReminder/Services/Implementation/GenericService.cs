using HealthReminder.Data;
using HealthReminder.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HealthReminder.Services.Implementation
{
    public class GenericService<T> : IGenericService<T> where T : class
    {
        private readonly ApplicationDbContext _context;
        internal DbSet<T> _dbSet;
        public GenericService(ApplicationDbContext context)
        {
            _context = context;  
            _dbSet = _context.Set<T>();
        }
        public async Task<T> CreateAsync(T entity)
        {
            var create =  await _dbSet.AddAsync(entity);
            return create.Entity;
        }

        public async Task<T> DeleteAsync(int id)
        {
            var delete =  await _dbSet.FindAsync(id);
            return delete;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public Task<T> UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
