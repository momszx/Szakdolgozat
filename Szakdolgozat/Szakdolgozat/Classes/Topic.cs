using System;

namespace Szakdolgozat.Classes
{
    public class Topic : BaseClass
    {
        private int userId;
        private int subjectId;
        private string name;
        private string text;
        private DateTime dateTime;
        private string themeType;
        private int points;
        private bool open;
        private string user;
        private int myVote;
        private int myVoteId;
        public Topic(int id, int userId, int subjectId, string name, string text, string Uid, DateTime dateTime, string themeType, bool open, string user, int points,int myVote,int myVoteId) : base(id, Uid)
        {
            UserId = userId;
            SubjectId = subjectId;
            Name = name;
            Text = text;
            DateTime = dateTime;
            ThemeType = themeType;
            Points = points;
            User = user;
            Open = open;
            MyVote = myVote;
            MyVoteId = myVoteId;
        }

        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string Text { get => text; set => text = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
        public int UserId { get => userId; set => userId = value; }
        public string ThemeType { get => themeType; set => themeType = value; }
        public int Points { get => points; set => points = value; }
        public string User { get => user; set => user = value; }
        public bool Open { get => open; set => open = value; }
        public int MyVote { get => myVote; set => myVote = value; }
        public int MyVoteId { get => myVoteId; set => myVoteId = value; }
    }
}
