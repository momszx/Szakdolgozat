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
        private readonly DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Comment> ListComment(Topic topic)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    List<Comment> comments = new();
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT comment.id,comment.topicId,comment.userId,comment.text,comment.dateTime,comment.point,user.username FROM comment inner join user on comment.userId = user.id where topicId={0}", topic.Id));
                        if (dataReader.HasRows)
                        {
                            while (dataReader.Read())
                            {
                                comments.Add(new Comment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetDateTime(4), dataReader.GetInt32(5), dataReader.GetString(6)));
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
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddComment(Comment comment)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO comment( topicId, userId, text, dateTime) value('{0}','{1}','{2}','{3}')", comment.TopicId, comment.UserId, comment.Text, DateTime.Now.ToString("yyyy-MM-dd H:mm:ss")));
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
        [HttpPatch]
        public int UpdateComment(Comment comment)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
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
        }
        [HttpDelete]
        public int DeleteComment(Comment comment)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                        MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM comment where id='{0}'", comment.Id));
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
}
