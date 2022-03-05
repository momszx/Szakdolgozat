using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NoteController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Note> ListNote(Subject subject)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Note> Notes = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM note WHERE subkectId={0}", subject.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Notes.Add(new Note(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetString(2), "", dataReader.GetString(3)));
                        }
                    }

                    dataReader.Close();
                    DB.Close();
                }
                return Notes;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
