using System.ComponentModel.DataAnnotations;

namespace HealthReminder.Entities
{
    public class Drug
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gram { get; set; }
        public int BioId { get; set; }
        public Bio Bio { get; set; }
    }
}
