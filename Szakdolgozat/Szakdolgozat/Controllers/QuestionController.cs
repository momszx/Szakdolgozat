using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Question> ListQuestion(Subject subject)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Question> Questiones = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM science WHERE scienceId={0}", subject.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Questiones.Add(new Question(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetString(4)));
                        }
                    }

                    dataReader.Close();
                    DB.Close();
                }
                return Questiones;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
