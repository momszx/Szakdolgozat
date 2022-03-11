using System;

namespace Szakdolgozat.Classes
{
    public class QuestionComment : BaseClass
    {
        private int questionId;
        private int userId;
        private string comment;
        private DateTime dateTime;

        public QuestionComment(int id, int questionId, int userId, string comment, string Uid, DateTime dateTime) : base(id, Uid)
        {
            QuestionId = questionId;
            UserId = userId;
            Comment = comment;
            DateTime = dateTime;
        }

        public int QuestionId { get => questionId; set => questionId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Comment { get => comment; set => comment = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
    }
}
