using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    [Route("department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        //Remember, thse are not static methods

        //Read all
        [HttpGet]
        public List<Department> GetAll()
        {
            return Department.GetAll();
        }
        //Read one
        [HttpGet("{id}")]
        public Department GetOne(string id)
        {
            return Department.Get(id);
        }
        //Create one
        [HttpPost]
        public Department Save(Department dep)
        {
            return Department.Save(dep);
        }
        //Delete
        [HttpDelete("{id}")]
        public APIresponse Delete(string id)
        {
            Department.Delete(id);
            return new APIresponse { status ="Ok"};
        }
        //Update
        [HttpPut]
        public APIresponse Update(Department dep)
        {
            Department.Update(dep);
            return new APIresponse { status = "ok" };
        }

    }
}
