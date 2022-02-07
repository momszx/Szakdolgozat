namespace Szakdolgozat
{
    public class Note : BaseClass
    {
        private int subjectId;
        private string name;
        private string note;

        public Note(int id, string uID = "") : base(id, uID)
        {
        }

        public Note(int id, int subjectId, string name, string note, string uID = "") : this(id, uID)
        {
            SubjectId = subjectId;
            Name = name;
            _Note = note;
        }

        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string _Note { get => note; set => note = value; }
    }
}
