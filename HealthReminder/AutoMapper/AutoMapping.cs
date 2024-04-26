using AutoMapper;
using HealthReminder.Entities;
using HealthReminder.Entities.Dto_s;

namespace HealthReminder.AutoMapper
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<Bio, CreateBioDto>().ReverseMap();
            CreateMap<Bio, BioResponseModel>().ReverseMap();
            CreateMap<Drug, CreateDrugDto>().ReverseMap();
            CreateMap<CreateDrugDto, Drug>(); 
        }
    }
}
