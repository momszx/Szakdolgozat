using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        private static readonly Dictionary<string, User> Users = new();

        [HttpPost]
        public User Login(User user)
        {
            try
            {
                string uID = string.Empty;
                User baseUser = null;
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM users WHERE username ='{0}' && password = md5('{1}')", user.Username, user.Password));
                    if (dataReader.HasRows)
                    {
                        uID = Guid.NewGuid().ToString();

                        while (dataReader.Read())
                        {
                            baseUser = new User(dataReader.GetInt32(0), dataReader.GetString(1), "", dataReader.GetInt32(3), uID);
                        }
                        Users.Add(uID, baseUser);
                    }
                    else
                    {
                        baseUser.UID = "WRONG_LOGIN_INFO";
                    }
                    dataReader.Close();
                    DB.Close();
                }
                return baseUser;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        [HttpPut]
        public User Registration(User user)
        {
            try
            {
                string uID = string.Empty;
                User baseUser = null;
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT id, username FROM users WHERE username ='{0}' && password = md5('{1}')", user.Username, user.Password));
                    uID = Guid.NewGuid().ToString();
                    Users.Add(uID, user);
                    dataReader.Close();
                    DB.Close();
                }
                return baseUser;
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete]
        public int Logout(User user)
        {
            try
            {
                if (Users.ContainsKey(user.UID))
                {
                    Users.Remove(user.UID);
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public static bool GetDictionary(string UID)
        {
            try
            {
                if (Users.ContainsKey(UID))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
