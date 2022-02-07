using MySql.Data.MySqlClient;
namespace Szakdolgozat
{
    public class DatabaseManager
    {
        private bool connectionState = false;

        private readonly MySqlConnection connection = null;
        public MySqlConnection Connection => connection;

        private DatabaseManager()
        {
            connectionState = false;
            connection = new MySqlConnection("Server=127.0.0.1; database=sop; UID=sop; password=sop; charset=utf8;");
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
