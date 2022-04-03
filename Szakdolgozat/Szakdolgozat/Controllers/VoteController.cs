using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VoteController
    {
        [HttpPut]
        public int AddVote(Vote vote)
        {
            bool exist = true;
            using (DatabaseManager DB = DatabaseManager.Instance())
            {
                try
                {
                    if (DB.Connect())
                    {
                        MySqlDataReader dataReader = DB.DataReader(string.Format("Select EXISTS(SELECT * from upDownVote where userId='{0}' and conId='{1}' and type='{2}')", vote.UserId, vote.ConId, vote.Type));
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
                            MySqlDataReader dataReader = DB.DataReader(string.Format("insert into upDownVote(userId, conId, type, value) VALUE ('{0}','{1}','{2}','{3}')", vote.UserId, vote.ConId, vote.Type, vote.Value));
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
                                MySqlDataReader dataReader = DB.DataReader(string.Format("SELECT id from upDownVote where userId='{0}' and conId='{1}' and type='{2}'", vote.UserId, vote.ConId, vote.Type));
                                if (dataReader.Read())
                                {
                                    vote.Id = dataReader.GetInt32(0);
                                }
                                dataReader.Close();
                                DB.Close();
                            }
                            if (DB.Connect())
                            {
                                MySqlDataReader dataReader = DB.DataReader(string.Format("update upDownVote set value ='{0}' where id='{1}'", vote.Value, vote.Id));
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
