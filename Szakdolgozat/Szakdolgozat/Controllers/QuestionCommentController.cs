using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionCommentController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<QuestionComment> ListQuestionComment(Question question)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<QuestionComment> QuestionCommentes = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM questionComment WHERE questionId={0}", question.Id));
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            QuestionCommentes.Add(new QuestionComment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetDateTime(4)));
                        }
                    }
                    dataReader.Close();
                    DB.Close();
                }
                return QuestionCommentes;
            }
            catch (Exception)
            {
                throw;
            }
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddQuestionComment(QuestionComment questionComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO questionComment(questionId,comment)value('{0}','{1}')", questionComment.QuestionId, questionComment.Comment));
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
        public int UpdateQuestionComment(QuestionComment questionComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE questionComment set comment='{0}',questionId='{1}' where id='{2}'", questionComment.Comment, questionComment.QuestionId, questionComment.Id));
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
        public int DeleteQuestionComment(QuestionComment questionComment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete questionComment where id='{0}'", questionComment.Id));
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
