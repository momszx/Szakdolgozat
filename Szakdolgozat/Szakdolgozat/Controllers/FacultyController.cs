using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class FacultyController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpGet]
        public IEnumerable<Faculty> ListFaculty()
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Faculty> Facultyes = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM faculty"));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Facultyes.Add(new Faculty(dataReader.GetInt32(0), dataReader.GetString(1)));
                        }
                    }

                    dataReader.Close();
                    DB.Close();
                }
                return Facultyes;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
