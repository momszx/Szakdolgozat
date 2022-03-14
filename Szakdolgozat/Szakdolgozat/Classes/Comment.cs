using System;

namespace Szakdolgozat.Classes
{
    public class Comment : BaseClass
    {
        private int topicId;
        private int userId;
        private string text;
        private DateTime dateTime;
        

        public Comment(int id, int topicId, int userId, string text, string Uid, DateTime dateTime) : base(id, Uid)
        {
            TopicId = topicId;
            UserId = userId;
            Text = text;
            DateTime = dateTime;  
        }

        public int TopicId { get => topicId; set => topicId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Text { get => text; set => text = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
    }
}
