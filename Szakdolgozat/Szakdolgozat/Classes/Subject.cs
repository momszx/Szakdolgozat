namespace Szakdolgozat
{
    public class Subject : BaseClass
    {
        private int sciencedId;
        private string name;
        public string Name { get => name; set => name = value; }
        public int SciencedId { get => sciencedId; set => sciencedId = value; }
        public Subject(int id, string uID = "") : base(id, uID)
        {
        }
        public Subject(int id, int sciencedId, string name, string uID = "") : base(id, uID)
        {
            SciencedId = sciencedId;
            Name = name;
        }
    }
}
