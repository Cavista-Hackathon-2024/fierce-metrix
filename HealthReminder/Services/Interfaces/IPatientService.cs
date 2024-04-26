namespace HealthReminder.Services.Interfaces
{
    public interface IPatientService
    {
        Task<string> SendNotification(string PhoneNumber);
    }
}
