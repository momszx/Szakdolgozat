using System;

namespace Szakdolgozat.Classes
{
    public class Comment : BaseClass
    {
        private int topicId;
        private int userId;
        private string text;
        private DateTime dateTime;
        private int points;
        private string user;
        private int myVote;
        private int myVoteId;


        public Comment(int id, int topicId, int userId, string text, string Uid, DateTime dateTime , string user, int points, int myVote, int myVoteId) : base(id, Uid)
        {
            TopicId = topicId;
            UserId = userId;
            Text = text;
            DateTime = dateTime;
            Points = points;
            User = user;
            MyVote = myVote;
            MyVoteId = myVoteId;
        }

        public int TopicId { get => topicId; set => topicId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Text { get => text; set => text = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
        public int Points { get => points; set => points = value; }
        public string User { get => user; set => user = value; }
        public int MyVote { get => myVote; set => myVote = value; }
        public int MyVoteId { get => myVoteId; set => myVoteId = value; }
    }
}
