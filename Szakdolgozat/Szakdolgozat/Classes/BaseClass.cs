namespace Szakdolgozat.Classes
{
    public class BaseClass
    {
        private int id;
        private string uID;

        public int Id { get => id; set => id = value; }
        public string UID { get => uID; set => uID = value; }

        public BaseClass(int id, string uID)
        {
            Id = id;
            UID = uID;
        }
    }
}
