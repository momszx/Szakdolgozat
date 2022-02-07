namespace Szakdolgozat
{
    public class NoteComment : BaseClass
    {
        private int noteId;
        private int userId;
        private string comment;
        public NoteComment(int id, string uID = "") : base(id, uID)
        {
        }

        public NoteComment(int id, int questionId, int userId, string comment, string uID = "") : base(id, uID)
        {
            NotenId = questionId;
            UserId = userId;
            Comment = comment;
        }

        public int NotenId { get => noteId; set => noteId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Comment { get => comment; set => comment = value; }
    }
}
