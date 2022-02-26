namespace Szakdolgozat.Classes
{
    public class Subject : BaseClass
    {
        private int sciencedId;
        private string name;

        public Subject(int id,int sciencedId, string name ,string uID):base(id,uID)
        {
            SciencedId = sciencedId;
            Name = name;
        }

        public int SciencedId { get => sciencedId; set => sciencedId = value; }
        public string Name { get => name; set => name = value; }
    }
}
