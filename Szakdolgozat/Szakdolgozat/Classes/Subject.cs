namespace Szakdolgozat.Classes
{
    public class Subject : BaseClass
    {
        private int sciencedId;
        private string name;
        public string Name { get => name; set => name = value; }
        public int SciencedId { get => sciencedId; set => sciencedId = value; }
        public Subject(int id, string uID ) : base(id, uID)
        {
        }
        public Subject(int id, string uID, int sciencedId, string name) : base(id, uID)
        {
            SciencedId = sciencedId;
            Name = name;
        }
    }
}
