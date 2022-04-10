using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InsertListController
    {
        [HttpPut]
        public int AddList(AddList addList)
        {
            try
            {

                using (DatabaseManager DB = DatabaseManager.Instance())
                {
                    bool exist = false;
                    if (DB.Connect())
                    {
                        string sql = "";
                        switch (addList.Type)
                        {
                            case "faculty":
                                sql = string.Format("select exists(select * from faculty where name='{0}');", addList.Text);
                                break;
                            case "science":
                                sql = string.Format("select exists(select * from science where userId='{0}');", addList.Text);
                                break;
                            case "subject":
                                sql = string.Format("select exists(select * from subject where userId='{0}');", addList.Text);
                                break;
                            default:
                                break;
                        }
                        if (sql != "")
                        {
                            MySqlDataReader dataReader = DB.DataReader(sql);
                            if (dataReader.Read())
                            {
                                exist = dataReader.GetBoolean(0);
                            }
                            dataReader.Close();

                        }
                        DB.Close();

                    }
                    if (!exist)
                    {
                        if (DB.Connect())
                        {
                            string sql = "";
                            switch (addList.Type)
                            {
                                case "faculty":
                                    sql = string.Format("insert into faculty( name) value ('{0}');", addList.Text);
                                    break;
                                case "science":
                                    sql = string.Format("insert into science( facultyId, name) value ('{0}','{1}');", addList.Id, addList.Text);
                                    break;
                                case "subject":
                                    sql = string.Format("insert into subject( subjectId, name) value ('{0}','{1}');", addList.Id, addList.Text);
                                    break;
                                default:
                                    break;
                            }
                            if (sql != "")
                            {
                                MySqlDataReader dataReader = DB.DataReader(sql);

                                dataReader.Close();

                            }
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
        [HttpDelete]
        public int DeletedList(AddList addList)
        {
            try
            {

                using (DatabaseManager DB = DatabaseManager.Instance())
                {
                    if (DB.Connect())
                    {
                        string sql = "";
                        switch (addList.Type)
                        {//"delete FROM comment where id='{0}'"
                            case "faculty":
                                sql = string.Format("delete FROM facultywhere id='{0}'", addList.Id);
                                break;
                            case "science":
                                sql = string.Format("delete FROM sciencewhere id='{0}'", addList.Id);
                                break;
                            case "subject":
                                sql = string.Format("delete FROM subjectwhere id='{0}'", addList.Id);
                                break;
                            default:
                                break;
                        }
                        if (sql != "")
                        {
                            MySqlDataReader dataReader = DB.DataReader(sql);

                            dataReader.Close();
                        }
                        DB.Close();
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
