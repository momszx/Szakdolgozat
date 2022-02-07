namespace Szakdolgozat
{
    public class Permission : BaseClass
    {
        private int userId;
        private int permission;
        public Permission(int id, string uID = "") : base(id, uID)
        {
        }
        public Permission(int id, int userId, int permission, string uID = "") : base(id, uID)
        {
            UserId = userId;
            _Permission = permission;
        }

        public int UserId { get => userId; set => userId = value; }
        public int _Permission { get => permission; set => permission = value; }
    }
}
