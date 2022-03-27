
using Microsoft.AspNetCore.SignalR;
using MySql.Data.MySqlClient;
using System;
using System.Threading.Tasks;

namespace Szakdolgozat.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        public async Task SendMessage(string user, string message, int userId)
        {
            DatabaseManager localdb = DatabaseManager.Instance();
            ChatMessage chat=new ChatMessage(user,message, userId);
            await Clients.All.ReceiveMessage (chat);
            try
            {
                localdb = DatabaseManager.Instance();
                if (localdb.Connect())
                {
                    MySqlDataReader dataReader = localdb.DataReader(string.Format("insert into chat ( userId, message, created) VALUE ('{0}','{1}','{2}')", chat.UserId, chat.Message, chat.Created));
                    dataReader.Close();
                    localdb.Close();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task JoinGroup(string group)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, group);
        }
        public async Task SendMessageToGroup(string group, string message)
        {
            await Clients.OthersInGroup(group).ReceiveGroupMessage( message);
        }
        public async Task RemoveFromGroup(string group)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, group);
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                   // MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE topic set text='{0}' where id='{1}'", topic.Text, topic.Id));
                    //dataReader.Close();
                    DB.Close();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {

            return base.OnDisconnectedAsync(exception);
        }
        private void savechat(ChatMessage message)
        {
            message.Message = "asd";
        }
    }
}