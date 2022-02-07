namespace Szakdolgozat
{
    public class User : BaseClass
    {
        private string username;
        private string password;
        private int coin;
        public User(int id, string uID = "") : base(id, uID)
        {
        }

        public User(int id, string username, string password, int coin, string uID = "") : base(id, uID)
        {
            Username = username;
            Password = password;
            Coin = coin;
        }

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public int Coin { get => coin; set => coin = value; }
    }
}
