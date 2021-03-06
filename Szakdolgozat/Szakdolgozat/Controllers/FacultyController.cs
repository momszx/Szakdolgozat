using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class FacultyController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Faculty> ListFaculty()
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    List<Faculty> Facultyes = new();
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM faculty"));
                        if (dataReader.HasRows)
                        {

                            while (dataReader.Read())
                            {
                                Facultyes.Add(new Faculty(dataReader.GetInt32(0), "", dataReader.GetString(1)));
                            }
                        }

                        dataReader.Close();
                        DB.Close();
                    }
                    return Facultyes;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        [HttpPost]
        public int AddFaculty(Faculty faculty)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO faculty(name)value('{0}')", faculty.Name));
                        dataReader.Close();
                        DB.Close();
                    }
                    return 1;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        [HttpPatch]
        public int UpdateFaculty(Faculty faculty)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE faculty set name='{0}' where id='{1}'", faculty.Name, faculty.Id));
                        dataReader.Close();
                        DB.Close();
                    }
                    return 1;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        [HttpDelete]
        public int DeleteFaculty(Faculty faculty)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést majd a szakot
                        MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM faculty where id='{0}'", faculty.Id));
                        dataReader.Close();
                        DB.Close();
                    }
                    return 1;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}
