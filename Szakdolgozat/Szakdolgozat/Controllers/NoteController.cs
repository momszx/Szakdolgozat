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
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM note WHERE subjectId={0}", subject.Id));
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
        //Innentől átnézni 
        [HttpPut]
        public int AddNote(Note note)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO note(subjectId,name)value('{0}','{1}')", note.SubjectId, note.Name));
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
        public int UpdateNote(Note note)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE note set name='{0}',subjectId='{1}' where id='{2}'", note.Name, note.SubjectId, note.Id));
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
        public int DeleteNote(Note note)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete note where id='{0}'", note.Id));
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
