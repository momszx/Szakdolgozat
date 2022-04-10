namespace Szakdolgozat.Classes
{
    public class AddList:BaseClass
    {
        string text;
        string type;

        public AddList(int id,string text, string type, string uID) : base(id, uID)
        {
            Text = text;
            Type = type;
        }

        public string Text { get => text; set => text = value; }
        public string Type { get => type; set => type = value; }
    }
}
