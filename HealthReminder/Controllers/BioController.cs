using HealthReminder.Entities.Dto_s;
using HealthReminder.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HealthReminder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BioController : ControllerBase
    {
        private readonly IBioService _bioService;
        public BioController(IBioService bioService)
        {
            _bioService = bioService;   
        }

        [HttpPost]
        [Route("CreateBio")]
        public async Task<IActionResult> Create([FromBody] CreateBioDto bioDto)
        {
            var result = await _bioService.CreateAsync(bioDto);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _bioService.GetAllAsync();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetSingle")]
        public async Task<IActionResult> Create([FromQuery] int Id)
        {
            var result = await _bioService.GetAsync(Id);
            return Ok(result);
        }
    }
}
