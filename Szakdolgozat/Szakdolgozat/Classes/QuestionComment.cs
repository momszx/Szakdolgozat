namespace Szakdolgozat.Classes
{
    public class QuestionComment : BaseClass
    {
        private int questionId;
        private int userId;
        private string comment;

        public QuestionComment(int id, int questionId, int userId, string comment, string Uid) : base(id, Uid)
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
