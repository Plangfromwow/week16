using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    //Let's change the base route from "api/[controller]" to just employee
    [Route("employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        //Remember, thse are not static methods

        //Read all
        [HttpGet]
        public List<Employee> GetAll()
        {
            return Employee.GetAll();
        }
        //Read one
        [HttpGet("{id}")]
        public Employee GetOne(int id)
        {
            return Employee.Get(id);
        }
        //Create one
        [HttpPost]
        public Employee Save(Employee emp)
        {
            return Employee.Save(emp);
        }
        //Delete
        [HttpDelete("{id}")]
        public APIresponse Delete(int id)
        {
            Employee.Delete(id);
            return new APIresponse { status = "ok" };
        }
        //Update
        [HttpPut]
        public APIresponse Update(Employee emp)
        {
            Employee.Update(emp);
            return new APIresponse { status = "ok" };
        }
    }
}
