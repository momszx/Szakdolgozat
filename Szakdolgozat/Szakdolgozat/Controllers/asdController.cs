using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class asdController : ControllerBase
    {
        [HttpDelete]
        public int DeleteEmployeeById(int id)
        {
            return 200;
        }

        [HttpPost]
        public int AddEmployee(Asd employee)
        {
            return employee.Id;
        }

        [HttpPut]
        public int UpdateEmployee(Asd employee)
        {
            return employee.Id;
        }
    }
}
