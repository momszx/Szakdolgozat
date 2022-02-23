namespace Szakdolgozat.Classes
{
    public class Asd:BaseClass
    {
        private string name;
        private int facultyId;

        public Asd(string name, int facultyId,int id,string Uid):base(id, Uid)
        {
            Name = name;
            FacultyId = facultyId;
        }

        public string Name { get => name; set => name = value; }
        public int FacultyId { get => facultyId; set => facultyId = value; }
    }
}
