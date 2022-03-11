using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM noteComment WHERE noteId={0}", note.Id));
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            Notes.Add(new NoteComment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetDateTime(4)));
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
        //Innentől átnézni 
        [HttpPut]
        public int AddNoteComment(NoteComment noteComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO noteComment(noteId,comment)value('{0}','{1}')", noteComment.NoteId, noteComment.Comment));
                    dataReader.Close();
                    DB.Close();
                }
                return 1;
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPatch]
        public int UpdateNoteComment(NoteComment noteComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE noteComment set comment='{0}',NoteId='{1}' where id='{2}'", noteComment.Comment, noteComment.NoteId, noteComment.Id));
                    dataReader.Close();
                    DB.Close();
                }
                return 1;
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpDelete]
        public int DeleteNoteComment(NoteComment noteComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete noteComment where id='{0}'", noteComment.Id));
                    dataReader.Close();
                    DB.Close();
                }
                return 1;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
