//removed the .models part of the namespace 
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API
{
    [Table("department")]
    public class Department
    {
        //Explicit key means we set it ourselves and it should not auto-increment
        [ExplicitKey]
        public string id { get; set; }
        public string name { get; set; }
        public string location { get; set; }

        public static MySqlConnection DB;


        //read all 
        public static List<Department> GetAll()
        {
            return DB.GetAll<Department>().ToList();
        }

        //read one 
        public static Department Get(string id)
        {
            return DB.Get<Department>(id);
        }
        //create
        public static Department Save(Department Dep)
        {
            DB.Insert(Dep);
            return Dep;
        }
        //Delete
        public static void Delete(string id)
        {
            Department Dep = new Department() { id = id };
            DB.Delete(Dep);
        }
        //Update
        public static void Update(Department Dep)
        {
            DB.Update(Dep);
        }


    }

}
