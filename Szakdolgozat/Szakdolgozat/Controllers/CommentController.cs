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
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT comment.id, comment.topicId, comment.userId, comment.text, comment.dateTime,  user.username, ifnull((SELECT sum(value) FROM upDownVote where conId = comment.id and type = 'Comment'), 0) as Vote, ifnull((select value from upDownVote where userId = '{0}' and conId = comment.id and type = 'Comment'), 0) as myVote, ifnull((select id from upDownVote where userId = '{0}' and conId = comment.id and type = 'Comment'), 0) as myVoteId, ifnull((SELECT count(*) FROM reaction where conId = comment.id and type = 'Comment' and value=1), 0) as 'like' , ifnull((SELECT count(*) FROM reaction where conId = comment.id and type = 'Comment' and value=2), 0) as 'dislike', ifnull((SELECT count(*) FROM reaction where conId = comment.id and type = 'Comment' and value=3), 0) as 'love', ifnull((select value from reaction where userId = '{0}' and conId = comment.id and type = 'Comment'), 0) as myReaction, ifnull((select id from reaction where userId = '{0}' and conId = comment.id and type = 'Comment'), 0) as myReactionId FROM comment inner join user on comment.userId = user.id where topicId = '{1}';", topic.UserId, topic.Id));
                        if (dataReader.HasRows)
                        {
                            while (dataReader.Read())
                            {
                                comments.Add(new Comment(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), "", dataReader.GetDateTime(4), dataReader.GetString(5), dataReader.GetInt32(6), dataReader.GetInt32(7), dataReader.GetInt32(8), new int[] { dataReader.GetInt32(9), dataReader.GetInt32(10), dataReader.GetInt32(11) }, dataReader.GetInt32(12), dataReader.GetInt32(13)));
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
