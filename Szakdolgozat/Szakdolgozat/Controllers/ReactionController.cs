using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReactionController
    {
        [HttpPut]
        public int Reaction(Reaction reaction)
        {
            bool exist = true;
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("Select EXISTS(SELECT * from reaction where userId='{0}' and conId='{1}' and type='{2}')", reaction.UserId, reaction.ConId, reaction.Type));
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
                            MySqlDataReader dataReader = DB.DataReader(string.Format("insert into reaction(userId, conId, type, value) VALUE ('{0}','{1}','{2}','{3}')", reaction.UserId, reaction.ConId, reaction.Type, reaction.Value));
                            dataReader.Close();
                            DB.Close();
                        }
                    }
                    else
                    {
                        try
                        {
                            if (DB.Connect())
                            {
                                MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT id from reaction where userId='{0}' and conId='{1}' and type='{2}'", reaction.UserId, reaction.ConId, reaction.Type));
                                if (dataReader.Read())
                                {
                                    reaction.Id = dataReader.GetInt32(0);
                                }
                                dataReader.Close();
                                DB.Close();
                            }
                            if (DB.Connect())
                            {
                                MySqlDataReader dataReader = DB.DataReader(string.Format("update reaction set value ='{0}' where id='{1}'", reaction.Value, reaction.Id));
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
