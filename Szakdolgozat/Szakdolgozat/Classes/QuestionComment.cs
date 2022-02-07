namespace Szakdolgozat
{
    public class QuestionComment : BaseClass
    {
        private int questionId;
        private int userId;
        private string comment;
        public QuestionComment(int id, string uID = "") : base(id, uID)
        {
        }

        public QuestionComment(int id, int questionId, int userId, string comment, string uID = "") : base(id, uID)
        {
            QuestionId = questionId;
            UserId = userId;
            Comment = comment;
        }

        public int QuestionId { get => questionId; set => questionId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Comment { get => comment; set => comment = value; }
    }
}
