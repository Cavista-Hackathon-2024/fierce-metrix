using AutoMapper;
using HealthReminder.Data;
using HealthReminder.Entities;
using HealthReminder.Entities.Dto_s;
using HealthReminder.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace HealthReminder.Services.Implementation
{
    public class BioService : IBioService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public BioService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<BioResponseModel> CreateAsync(CreateBioDto entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new Exception("No Field Passed In");
                }

                var bio = new Bio();
                bio.LastName = entity.LastName;
                bio.FirstName = entity.FirstName;
                bio.Gender = entity.Gender;
                bio.Age = entity.Age;
                bio.DisOrder = entity.DisOrder;
                bio.AnyDisOrder = entity.AnyDisOrder;

                if (entity.Drugs != null)
                {
                    bio.Drugs = entity.Drugs.Select(dto => new Drug
                    {
                        Name = dto.Name,
                        Gram = dto.Gram,
                    }).ToList();
                }
                await _context.Bios.AddAsync(bio);
                _context.SaveChanges();
                return _mapper.Map<BioResponseModel>(bio);

            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<BioResponseModel> DeleteAsync(int id)
        {
            try
            {
                var delt = await _context.Bios.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (delt == null)
                    throw new Exception("No patient Found");
                else if (delt is null)
                    throw new Exception($"Patient with id {delt} is not found");
                _context.Bios.Remove(delt);
                _context.SaveChanges();
                return _mapper.Map<BioResponseModel>(delt);

            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<IEnumerable<BioResponseModel>> GetAllAsync()
        {
            try
            {
                var getall = await _context.Bios.ToListAsync();
                if (getall.Count < 0)
                    throw new Exception("Patient Info Not Found");
                return _mapper.Map<IEnumerable<BioResponseModel>>(getall);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<BioResponseModel> GetAsync(int id)
        {
            try
            {
                var getsinglePatient = await _context.Bios.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (getsinglePatient == null)
                    throw new Exception("No patient Found");
                else if (getsinglePatient is null)
                    throw new Exception($"Patient with id {getsinglePatient} is not found");
                return _mapper.Map<BioResponseModel>(getsinglePatient);
            }
            catch (Exception)
            {

                throw;
            }
        }
    

        public Task<string> SendNotification(string PhoneNumber)
        {
            throw new NotImplementedException();
        }
    }
}
