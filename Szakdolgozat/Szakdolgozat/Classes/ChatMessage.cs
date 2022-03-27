using System;

namespace Szakdolgozat.Hubs
{
    public class ChatMessage
    {
        public string User { get; set; }
        public string Message { get; set; }
        public int UserId { get; set; }
        public string Created { get; set; }
        public ChatMessage(string user, string message, int userId)
        {
            User = user;
            Message = message;
            UserId = userId;
            Created = DateTime.Now.ToString("yyyy-MM-dd H:mm:ss");
        }
        public ChatMessage(string user, string message,DateTime created)
        {
            User = user;
            Message = message;
            Created = created.ToString("yyyy-MM-dd H:mm:ss");
        }

    }
}
