namespace Szakdolgozat.Classes
{
    public class Science : BaseClass
    {
        private int facultyId;
        private string name;

        public Science(int id, int facultyId, string name, string Uid) : base(id, Uid)
        {
            Name = name;
            FacultyId = facultyId;
        }

        public string Name { get => name; set => name = value; }
        public int FacultyId { get => facultyId; set => facultyId = value; }

    }
}
