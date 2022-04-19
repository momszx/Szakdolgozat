
using Microsoft.AspNetCore.SignalR;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        private static readonly List<LiveEdit> Rooms = new();
        public async Task SendMessage(string user, string message, int userId)
        {
            DatabaseManager localdb = DatabaseManager.Instance();
            ChatMessage chat = new ChatMessage(user, message, userId);
            await Clients.All.ReceiveMessage(chat);
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
            bool has = false;
            for (int i = 0; i < Rooms.Count; i++)
            {
                if (Rooms[i].Group == group)
                {
                    has = true;
                }
            }
            string[] subs = group.Split('|');
            int id = Convert.ToInt32(subs[0]);
            if (!has)
            {
                Rooms.Add(new LiveEdit(id, "", group, new List<string> { Context.ConnectionId }));
            }
            else
            {
                int n = 0;
                for (int i = 0; i < Rooms.Count - 1; i++)
                {
                    if (Rooms[i].Id == id)
                    {
                        n = i;
                    }
                }
                Rooms[n].Userlist.Add(Context.ConnectionId);
            }
            await Groups.AddToGroupAsync(Context.ConnectionId, group);
        }
        public async Task SendMessageToGroup(string group, string message)
        {
            int n = 0;
            for (int i = 0; i < Rooms.Count; i++)
            {
                if (Rooms[i].Group == group)
                {
                    n = i;
                }
            }
            Rooms[n].Text = message;
            await Clients.OthersInGroup(group).ReceiveGroupMessage(message);
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            int n = -1;
            for (int i = 0; i < Rooms.Count; i++)
            {
                for (int y = 0; y < Rooms[i].Userlist.Count; y++)
                {
                    if (Rooms[i].Userlist[y] == Context.ConnectionId)
                    {
                        n = i;
                    }
                }
            }
            if (n != -1)
            {
                Rooms[n].Userlist.Remove(Context.ConnectionId);
                if (Rooms[n].Userlist.Count == 0 && Rooms[n].Text != "")
                {
                    using (DatabaseManager DB = DatabaseManager.Instance())
                    {
                        try
                        {
                            if (DB.Connect())
                            {
                                MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE topic set text='{0}' where id='{1}'", Rooms[n].Text, Rooms[n].Id));
                                dataReader.Close();
                                DB.Close();
                            }
                        }
                        catch (Exception)
                        {
                            throw;
                        }
                    }
                }
            }
            return base.OnDisconnectedAsync(exception);
        }
    }
}