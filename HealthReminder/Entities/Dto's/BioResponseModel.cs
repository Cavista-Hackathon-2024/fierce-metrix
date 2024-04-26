namespace HealthReminder.Entities.Dto_s
{
    public class BioResponseModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string DisOrder { get; set; }
        public string AnyDisOrder { get; set; }
        public List<Drug> Drugs { get; set; }
    }
}
