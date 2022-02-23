namespace Szakdolgozat.Classes
{
    public class NoteComment : BaseClass
    {
        private int noteId;
        private int userId;
        private string comment;

        public NoteComment(int id, int noteId, int userId, string comment, string Uid) : base(id, Uid)
        {
            NoteId = noteId;
            UserId = userId;
            Comment = comment;
        }

        public int NoteId { get => noteId; set => noteId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Comment { get => comment; set => comment = value; }
    }
}
