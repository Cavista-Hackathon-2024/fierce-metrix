using AutoMapper;
using HealthReminder.Data;
using HealthReminder.Entities;
using HealthReminder.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HealthReminder.Services.Implementation
{
    public class PatientService : IPatientService, IGenericService<Patient>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public PatientService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public Task<Patient> CreateAsync(Patient entity)
        {
            var Patient = new Patient();
            Patient
            throw new NotImplementedException();

        }

        public async Task<Patient> DeleteAsync(int id)
        {
            try
            {
                var delt = await _context.Patients.Where(x => x.Id == id).FirstOrDefaultAsync();
                if(delt == null)
                       throw new Exception("No patient Found");
                    else if (delt is null)
                        throw new Exception($"Patient with id {delt} is not found");
                _context.Patients.Remove(delt);
                _context.SaveChanges();
                return _mapper.Map<Patient>(delt);

            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<IEnumerable<Patient>> GetAllAsync()
        {
            try
            {
                var getall = await _context.Patients.ToListAsync();
                if (getall.Count < 0)
                    throw new Exception("Patient Info Not Found");
                return _mapper.Map<IEnumerable<Patient>>(getall);
            }
            catch (Exception )
            {

                throw;
            }
        }

        public async Task<Patient> GetAsync(int id)
        {
            try
            {
                var getsinglePatient = await _context.Patients.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (getsinglePatient == null)
                    throw new Exception("No patient Found");
                else if (getsinglePatient is null)
                    throw new Exception($"Patient with id {getsinglePatient} is not found");
                return _mapper.Map<Patient>(getsinglePatient);
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

        public Task<Patient> UpdateAsync(Patient entity)
        {
            throw new NotImplementedException();
        }
    }
}
