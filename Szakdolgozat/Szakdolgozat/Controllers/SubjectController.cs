using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Szakdolgozat
{
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
                    MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT * FROM science wher scienceId={0}", science.Id));
                    if (dataReader.HasRows)
                    {

                        while (dataReader.Read())
                        {
                            Subjectes.Add(new Subject(dataReader.GetInt32(0), dataReader.GetInt32(1), dataReader.GetString(2)));
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
    }
}
