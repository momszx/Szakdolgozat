using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Hubs;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpGet]
        public IEnumerable<ChatMessage> ListTopic()
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<ChatMessage> chatMessage = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader("SELECT user.username,chat.message,chat.created FROM chat inner join user on chat.userId = user.id = user.id ORDER BY created ASC ");
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            chatMessage.Add(new ChatMessage(dataReader.GetString(0), dataReader.GetString(1), dataReader.GetDateTime(2)));
                        }
                    }
                    dataReader.Close();
                    DB.Close();
                }
                return chatMessage;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
