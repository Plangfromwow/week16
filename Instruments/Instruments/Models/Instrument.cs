using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Instruments.Models
{
    [Table("instrument")]
    public class Instrument
    {
        [Key]
        public int id { get; set; }
        public string theType { get; set; }
        public string color { get; set; }
        public int year { get; set; }



        // adding static properties and methods. 
        // this is where we add our CRUD operations. 

        public static MySqlConnection DB;

        //read all rows from the table 

        public static List<Instrument> ReadAll()
        {
            return DB.GetAll<Instrument>().ToList();
        }

        // create new istrument
        public static Instrument Add(Instrument inst)
        {
            DB.Insert(inst);
            return inst;
        }

        public static void Delete(int id)
        {
            Instrument inst = new Instrument() { id = id };
            DB.Delete(inst);
        }


        //update the data
        public static void Update(Instrument inst)
        {
            DB.Update(inst);
        }
    }
}
