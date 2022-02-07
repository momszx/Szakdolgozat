using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Szakdolgozat.Controllers
{
    public class NoteCommentController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<NoteComment> ListNoteComment(Note note)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<NoteComment> Notes = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM noteComment wher noteId={0}", note.Id));
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            Notes.Add(new NoteComment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3)));
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
