using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController : ControllerBase
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPost]
        public IEnumerable<Subject> ListSubject(Science science)
        {
            try
            {
                DB = DatabaseManager.Instance();
                List<Subject> Subjectes = new();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM subject WHERE scienceId={0}", science.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Subjectes.Add(new Subject(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetString(2), ""));
                        }
                    }

                    dataReader.Close();
                    DB.Close();
                }
                return Subjectes;
            }
            catch (Exception)
            {

                throw;
            }
        }
        //Innentől átnézni 
        [HttpPut]
        public int AddSubject(Subject subject)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("INSERT INTO subject(scienceId,name)value('{0}','{1}')", subject.SciencedId, subject.Name));
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
        [HttpPatch]
        public int UpdateSubject(Subject subject)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("UPDATE subject set name='{0}',scienceId='{1}' where id='{2}'", subject.Name, subject.SciencedId, subject.Id));
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
        [HttpDelete]
        public int DeleteSubject(Subject subject)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {//először tötölni a jegyzet és a kérdés kommenteket majd törölni a jegyzeteket és a kérdéseket majd a tárgyat  
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM subject where id='{0}'", subject.Id));
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
