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
                            QuestionCommentes.Add(new QuestionComment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), "", dataReader.GetString(3)));
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
    }
}
