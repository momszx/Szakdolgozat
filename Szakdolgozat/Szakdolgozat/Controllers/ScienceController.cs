using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class ScienceController : ControllerBase
    {
        [HttpPost]
        public IEnumerable<Science> ListScience(Faculty faculty)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    List<Science> Sciences = new();
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM science WHERE facultyId={0}", faculty.Id));
                        if (dataReader.HasRows)
                        {

                            while (dataReader.Read())
                            {
                                Sciences.Add(new Science(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetString(2), ""));
                            }
                        }

                        dataReader.Close();
                        DB.Close();
                    }
                    return Sciences;
                }
                catch (Exception)
                {
                    DB.Close();
                    throw;
                }
            }
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddFaculty(Science science)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO science(facultyId,name)value('{0}','{1}')", science.FacultyId, science.Name));
                        dataReader.Close();
                        DB.Close();
                    }
                    return 1;
                }
                catch (Exception)
                {
                    DB.Close();
                    throw;
                }
            }
        }
        [HttpPatch]
        public int UpdateFaculty(Science science)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE science set name='{0}',facultyId='{1}' where id='{2}'", science.Name, science.FacultyId, science.Id));
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
        public int DeleteFaculty(Science science)
        {
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat majd képzést 
                        MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM science where id='{0}'", science.Id));
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
