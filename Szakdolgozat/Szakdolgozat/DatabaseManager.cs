using MySql.Data.MySqlClient;
namespace Szakdolgozat
{
    public class DatabaseManager
    {
        private bool connectionState = false;
        private static readonly string server = "192.168.50.15";
        private static readonly string database = "EKEHub";
        private static readonly string uid = "root";
        private static readonly string password = "root_password";

        private static readonly string connStr = "SERVER=" + server + ";" + "DATABASE=" +
                                                 database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";";

        private readonly MySqlConnection connection = null;
        public MySqlConnection Connection => connection;

        private DatabaseManager()
        {
            connectionState = false;
            connection = new MySqlConnection(connStr);
        }

        private static DatabaseManager _instance = null;
        public static DatabaseManager Instance()
        {
            if (_instance == null)
            {
                _instance = new DatabaseManager();
            }

            return _instance;
        }

        public bool Connect()
        {
            if (!connectionState)
            {
                connection.Open();
                connectionState = true;
            }
            return true;
        }

        public MySqlDataReader DataReader(string query)
        {
            return new MySqlCommand(query, Connection).ExecuteReader();
        }

        public int ExecuteNonQuery(string query)
        {
            return new MySqlCommand(query, Connection).ExecuteNonQuery();
        }

        public void Close()
        {
            if (connectionState)
            {
                connection.Close();
                connectionState = false;
            }
        }
    }
}
