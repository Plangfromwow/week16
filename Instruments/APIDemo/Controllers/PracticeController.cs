using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PracticeController : ControllerBase
    {
        // we can call all these methods anything we want.
        // we only have httpget with nothing after it, this will default to the path
        [HttpGet]
        public string index()
        {
            return "Hello!";
        }

        // path will be //api/practice/number... very silly path we should just set it to API
        [HttpGet("number")]
        public int test1()
        {
            return 50;
        }
        //this path is for fun stuff 
        // it will be /api/practice/stuff
        [HttpGet("Stuff")]
        public stuff test2()
        {
            return new stuff() { height = 20, word = "hello", YesNo = true };
        }


        [HttpGet("list")]
        public List<stuff> test3()
        {
            List<stuff> result = new List<stuff>();
            result.Add(new stuff() { height = 34534, word = "words", YesNo = false });
            result.Add(new stuff() { height = 4, word = "nao", YesNo = true });
            result.Add(new stuff() { height = 5, word = "asdf", YesNo = false });
            result.Add(new stuff() { height = 987, word = "kj", YesNo = true });

            return result;
        }

        [HttpPost("double")]
        public int test4(int num)
        {
            return 2 * num;
        }

        [HttpPost("process")]
        public stuff test5(stuff data)
        {
            data.height = data.height * 2;
            data.YesNo = !data.YesNo;
            data.word = "New Word";

            return data;
        }

        // path same as the one above but will do something else beccause of the Post Protocol? 
        [HttpPost]
        public string test6(stuff data)
        {
            return $"{data.word} saved.";
        }
    }

    // outside of the class but we are still in the namespace 

    public class stuff
    {
        public int height { get; set; }
        public string word { get; set; }
        public bool YesNo { get; set; }
    }
}
