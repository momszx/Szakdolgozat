namespace Szakdolgozat
{
    public class Science : BaseClass
    {
        private int facultyId;
        private string name;
        public string Name { get => name; set => name = value; }
        public int FacultyId { get => facultyId; set => facultyId = value; }

        public Science(int id, string uID = "") : base(id, uID)
        {
        }
        public Science(int id, int facultyId, string name, string uID = "") : base(id, uID)
        {
            Name = name;
            FacultyId = facultyId;
        }
    }
}
