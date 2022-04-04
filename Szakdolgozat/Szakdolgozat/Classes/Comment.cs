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
        private int[] reaction = new int[3];
        private int myReactioId;
        private int myReactionValue;


        public Comment(int id, int topicId, int userId, string text, string Uid, DateTime dateTime, string user, int points, int myVote, int myVoteId, int[] reaction, int myReactioId, int myReactionValue) : base(id, Uid)
        {
            TopicId = topicId;
            UserId = userId;
            Text = text;
            DateTime = dateTime;
            Points = points;
            User = user;
            MyVote = myVote;
            MyVoteId = myVoteId;
            Reaction = reaction;
            MyReactioId = myReactioId;
            MyReactionValue = myReactionValue;
        }

        public int TopicId { get => topicId; set => topicId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Text { get => text; set => text = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
        public int Points { get => points; set => points = value; }
        public string User { get => user; set => user = value; }
        public int MyVote { get => myVote; set => myVote = value; }
        public int MyVoteId { get => myVoteId; set => myVoteId = value; }
        public int[] Reaction { get => reaction; set => reaction = value; }
        public int MyReactioId { get => myReactioId; set => myReactioId = value; }
        public int MyReactionValue { get => myReactionValue; set => myReactionValue = value; }
    }
}
