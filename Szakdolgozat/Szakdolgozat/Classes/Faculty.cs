namespace Szakdolgozat
{
    public class Faculty : BaseClass
    {
        private string name;
        public string Name { get => name; set => name = value; }
        public Faculty(int id, string uID = "") : base(id, uID)
        {
        }

        public Faculty(int id, string name, string uID = "") : base(id, uID)
        {
            Name = name;
        }
    }
}
