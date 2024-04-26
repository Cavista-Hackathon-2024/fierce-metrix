using HealthReminder.Entities;
using HealthReminder.Entities.Dto_s;

namespace HealthReminder.Services.Interface
{
    public interface IBioService
    {
        Task<IEnumerable<BioResponseModel>> GetAllAsync();
        Task<BioResponseModel> GetAsync(int id);
        Task<BioResponseModel> CreateAsync(CreateBioDto entity);
        Task<BioResponseModel> DeleteAsync(int id);
        Task<string> SendNotification(string PhoneNumber);
    }
}
