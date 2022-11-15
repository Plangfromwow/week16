using Instruments.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Instruments.Controllers
{
    [Route("instrument")]
    [ApiController]
    public class InstrumentController : ControllerBase
    {
        // Here are the routes: 
        // GET /instrument/ - returns the list of instruments
        // POST /instrument - adds new instrument to the database 
        // DELETE /instrument/{id} - Deletes instrument by ID 
        // POST /instrument/update -- updates the instrument that's passed in
        // 

        // as a review:
        // with API Controllers, the name of the function is not part of the URL path
        // so we can call the method whatever we want. 

        //Read the database
        [HttpGet]
        public List<Instrument> ReadAll()
        {
            return Instrument.ReadAll();
        }

        //Create
        [HttpPost]
        public Instrument Add(Instrument inst)
        {
            return Instrument.Add(inst);
        }
        // Delete
        [HttpDelete]
        public string Delete(int id)
        {
            Instrument.Delete(id);
            return "Ok";
        }
        // A lot of people use POST for their updates. 
        // In fact, lots of devs use POST for EVERYTHING except the Get All that returns the whole world
        [HttpPost("update")]
        public string Update(Instrument inst)
        {
            Instrument.Update(inst);
            return "It worked";
        }

    }
}
