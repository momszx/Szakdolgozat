using Microsoft.Win32.SafeHandles;
using MySql.Data.MySqlClient;
using System;
using System.Runtime.InteropServices;

namespace Szakdolgozat
{
    public class DatabaseManager : IDisposable
    {
        private bool disposed = false;
        private readonly SafeHandle handle = new SafeFileHandle(IntPtr.Zero, true);
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

        public void Dispose()
        {
            Dispose(disposing: true);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
            {
                return;
            }

            if (disposing)
            {
                handle.Dispose();
                // Free any other managed objects here.
                //
            }

            disposed = true;
        }
    }
}
