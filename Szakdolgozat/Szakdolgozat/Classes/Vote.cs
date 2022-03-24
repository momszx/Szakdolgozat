namespace Szakdolgozat.Classes
{
    public class Vote : BaseClass
    {
        private int userId;
        private int conId;
        private string type;
        private int value;

        public Vote(int id, int userId, int conId, string type, int value, string uID) : base(id, uID)
        {
            UserId = userId;
            ConId = conId;
            Type = type;
            Value = value;
        }

        public int UserId { get => userId; set => userId = value; }
        public int ConId { get => conId; set => conId = value; }
        public string Type { get => type; set => type = value; }
        public int Value
        {
            get => value;
            set
            {
                if (value == -1 || value == 0 || value == 1)
                {
                    this.value = value;
                }
                else
                {
                    this.value = 0;
                }
            }
        }
    }
}
