namespace Szakdolgozat.Classes
{
    public class User : BaseClass
    {
        private string username;
        private string password;
        private int coin;
        private int permission;

        public User(int id, string username, string password, int coin,int permission, string Uid) : base(id, Uid)
        {
            Username = username;
            Password = password;
            Coin = coin;
            Permission = permission;
        }

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public int Coin { get => coin; set => coin = value; }
        public int Permission { get => permission; set => permission = value; }
    }
}
