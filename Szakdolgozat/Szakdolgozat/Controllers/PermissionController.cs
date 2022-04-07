using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PermController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            try
            {
                List<User> users = new List<User>();
                using (DatabaseManager DB = DatabaseManager.Instance())
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("select id ,username,ifnull((select value from perm where userId=user.id),0) as permission FROM user"));
                        if (dataReader.HasRows)
                        {
                            while (dataReader.Read())
                            {
                                users.Add(new User(dataReader.GetInt32(0), dataReader.GetString(1), "", 0, dataReader.GetInt32(2), ""));
                            }
                        }
                        dataReader.Close();
                        DB.Close();
                    }
                }
                return users;
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut]
        public int AddPermission(User user)
        {
            try
            {

                using (DatabaseManager DB = DatabaseManager.Instance())
                {
                    bool exist = false;
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("select exists(select * from perm where userId='{0}');", user.Id));
                        if (dataReader.Read())
                        {
                            exist = dataReader.GetBoolean(0);
                        }
                        dataReader.Close();
                        DB.Close();
                    }
                    if (!exist)
                    {
                        if (DB.Connect())
                        {
                            MySqlDataReader dataReader = DB.DataReader(string.Format("insert into perm( userId, value) value ('{0}','{1}');", user.Id, user.Permission));
                            dataReader.Close();
                            DB.Close();
                        }
                    }
                    else
                    {
                        int id = 0;
                        //select id from perm where userId='{0}'
                        if (DB.Connect())
                        {
                            MySqlDataReader dataReader = DB.DataReader(string.Format("select id from perm where userId='{0}'", user.Id));
                            if (dataReader.Read())
                            {
                                id = dataReader.GetInt32(0);
                            }
                            dataReader.Close();
                            DB.Close();
                        }
                        if (DB.Connect())
                        {
                            MySqlDataReader dataReader = DB.DataReader(string.Format("update perm set value='{0}' where id='{1}'", user.Permission, id));
                            dataReader.Close();
                            DB.Close();
                        }
                    }
                    return 1;
                }

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
