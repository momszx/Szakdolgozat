using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class ScienceController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Science> ListScience(Faculty faculty)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Science> Sciences = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM science wher facultyId={0}",faculty.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Sciences.Add(new Science(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetString(2), dataReader.GetString(3)));
                        }
                    }

                    dataReader.Close();
                    DB.Close();
                }
                return Sciences;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
