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
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT topic.id,topic.userId,topic.subjectId,topic.name,topic.text,topic.dateTime,topic.themeType,topic.point,topic.open,user.username FROM topic inner join user on topic.userId = user.id where subjectId={0}", subject.Id));
                        if (dataReader.HasRows)
                        {

                            while (dataReader.Read())
                            {
                                topics.Add(new Topic(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetInt32(2), dataReader.GetString(3), dataReader.GetString(4), "", dataReader.GetDateTime(5), dataReader.GetString(6), dataReader.GetInt32(7), dataReader.GetBoolean(8), dataReader.GetString(9)));
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
                        MySqlDataReader dataReader = DB.DataReader(string.Format("insert into topic(userId, subjectId, name, text, dateTime ,themeType,open) value ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')", topic.UserId, topic.SubjectId, topic.Name, topic.Text, DateTime.Now.ToString("yyyy-MM-dd H:mm:ss"), topic.ThemeType,topic.Open));
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
                        MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE topic set name='{0}',text='{1}',open='{2}' where id='{3}'", topic.Name, topic.Text,topic.Open, topic.Id));
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
