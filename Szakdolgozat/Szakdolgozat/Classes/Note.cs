using System;
using System.Collections.Generic;

namespace Szakdolgozat.Classes
{
    public class Note : BaseClass
    {
        private int subjectId;
        private string name;
        private string noteWrite;

        public Note(int id, int subjectId, string name, string noteWrite, string Uid) : base(id, Uid)
        {
            SubjectId = subjectId;
            Name = name;
            NoteWrite = noteWrite;
        }

        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string NoteWrite { get => noteWrite; set => noteWrite = value; }
    }
}
