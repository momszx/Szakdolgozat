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
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM question WHERE subjectId={0}", subject.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Questiones.Add(new Question(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), dataReader.GetString(4), "", dataReader.GetDateTime(5)));
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
        //Innentől átnézni 
        [HttpPut]
        public int AddQuestion(Question question)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO question(questioneId,name)value('{0}','{1}')", question.SubjectId, question.Name));
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
        public int UpdateQuestiont(Question question)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE question set name='{0}',subjectId='{1}' where id='{2}'", question.Name, question.SubjectId, question.Id));
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
        public int DeleteQuestiont(Question question)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat  
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete question where id='{0}'", question.Id));
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
