using System;

namespace Szakdolgozat.Classes
{
    public class Note : BaseClass
    {
        private int userId;
        private int subjectId;
        private string name;
        private string noteWrite;
        private DateTime dateTime;
        public Note(int id, int userId, int subjectId, string name, string noteWrite, string Uid, DateTime dateTime) : base(id, Uid)
        {
            UserId = userId;
            SubjectId = subjectId;
            Name = name;
            NoteWrite = noteWrite;
            DateTime= dateTime;
        }

        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string NoteWrite { get => noteWrite; set => noteWrite = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
        public int UserId { get => userId; set => userId = value; }
    }
}
