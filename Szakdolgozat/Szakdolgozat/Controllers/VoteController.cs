using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VoteController
    {
        private DatabaseManager DB = DatabaseManager.Instance();
        [HttpPut]
        public int AddVote(Vote vote)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("insert into upDownVote(userId, conId, type, value) VALUE ('{0}','{1}','{2}','{3}')", vote.ConId, vote.UserId, vote.Type, vote.Value));
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
        public int UpdateVote(Vote vote)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("update upDownVote set value ='{0} where id='{1}", vote.Value, vote.Id));
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
        public int DeleteVote(Vote vote)
        {
            try
            {
                DB = DatabaseManager.Instance();
                if (DB.Connect())
                {
                    MySqlDataReader dataReader = DB.DataReader(string.Format("delete FROM upDownVote where id='{0}'", vote.Id));
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
