namespace Szakdolgozat
{
    public class Question : BaseClass
    {
        private int userId;
        private int subjectId;
        private string name;
        private string question;
        public Question(int id, string uID = "") : base(id, uID)
        {
        }

        public Question(int id, int userId, int subjectId, string name, string question, string uID = "") : base(id, uID)
        {
            UserId = userId;
            SubjectId = subjectId;
            Name = name;
            _Question = question;
        }

        public int UserId { get => userId; set => userId = value; }
        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string _Question { get => question; set => question = value; }
    }
}
