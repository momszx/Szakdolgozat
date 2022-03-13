using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Comment> ListComment(Topic topic)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Comment> comments = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM comment WHERE topicId={0}", topic.Id));
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            comments.Add(new Comment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetDateTime(4),dataReader.GetString(5)));
                        }
                    }
                    dataReader.Close();
                    DB.Close();
                }
                return comments;
            }
            catch (Exception)
            {
                throw;
            }
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddComment(Comment comment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO comment( topicId, userId, text, dateTime, themeType) value('{0}','{1}')", comment.TopicId,comment.UserId,comment.Text, comment.Text,comment.ThemeType));
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
        public int UpdateComment(Comment comment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE comment set text='{0}' where id='{1}'", comment.Text, comment.Id));
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
        public int DeleteComment(Comment comment)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete comment where id='{0}'", comment.Id));
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
