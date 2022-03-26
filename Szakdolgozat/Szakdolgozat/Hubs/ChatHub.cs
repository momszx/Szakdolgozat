
using Microsoft.AspNetCore.SignalR;
using MySql.Data.MySqlClient;
using System;
using System.Threading.Tasks;

namespace Szakdolgozat.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage (message);
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
    }
}