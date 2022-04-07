using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicController : ControllerBase
    {
        [HttpPost]
        public IEnumerable<Topic> ListTopic(Subject subject)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    List<Topic> topics = new();
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT topic.id, topic.userId, topic.subjectId, topic.name, topic.text,  topic.dateTime, topic.themeType, topic.open, user.username, ifnull((SELECT sum(value) FROM upDownVote where conId = topic.id and type = 'Topic'), 0) as Vote, ifnull((select value from upDownVote where userId = '{0}' and conId = topic.id and type = 'Topic'), 0) as myVote, ifnull((select id from upDownVote where userId = '{0}' and conId = topic.id and type = 'Topic'), 0) as myVoteId , ifnull((SELECT count(*) FROM reaction where conId = topic.id and type = 'Topic' and value = 1), 0) as 'like', ifnull((SELECT count(*) FROM reaction where conId = topic.id and type = 'Topic' and value = 2), 0) as 'dislike', ifnull((SELECT count(*) FROM reaction where conId = topic.id and type = 'Topic' and value = 3), 0) as 'love', ifnull((select value from reaction where userId = '{0}' and conId = topic.id and type = 'Topic'), 0) as myReaction, ifnull((select id from reaction where userId = '{0}' and conId = topic.id and type = 'Topic'), 0) as myReactionId FROM topic inner join user on topic.userId = user.id where subjectId = '{1}';", subject.UserId, subject.Id));
                        if (dataReader.HasRows)
                        {

                            while (dataReader.Read())
                            {
                                topics.Add(new Topic(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), dataReader.GetString(4), "", dataReader.GetDateTime(5), dataReader.GetString(6), dataReader.GetBoolean(7), dataReader.GetString(8), dataReader.GetInt32(9), dataReader.GetInt32(10), dataReader.GetInt32(11), new int[] { dataReader.GetInt32(12), dataReader.GetInt32(13), dataReader.GetInt32(14) }, dataReader.GetInt32(15), dataReader.GetInt32(16)));
                            }
                        }
                        dataReader.Close();
                        DB.Close();
                    }
                    return topics;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddTopic(Topic topic)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("insert into topic(userId, subjectId, name, text, dateTime ,themeType,open) value ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')", topic.UserId, topic.SubjectId, topic.Name, topic.Text, DateTime.Now.ToString("yyyy-MM-dd H:mm:ss"), topic.ThemeType, topic.Open));
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
        public int UpdateTopic(Topic topic)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE topic set name='{0}',text='{1}',open='{2}' where id='{3}'", topic.Name, topic.Text, topic.Open, topic.Id));
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
        public int DeleteTopic(Topic topic)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                        MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM topic where id='{0}'", topic.Id));
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
