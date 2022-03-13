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
        public Topic(int id, int userId, int subjectId, string name, string text, string Uid, DateTime dateTime) : base(id, Uid)
        {
            UserId = userId;
            SubjectId = subjectId;
            Name = name;
            Text = text;
            DateTime= dateTime;
        }

        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string Text { get => text; set => text = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
        public int UserId { get => userId; set => userId = value; }
    }
}
