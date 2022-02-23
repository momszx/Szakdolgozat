using Microsoft.AspNetCore.Mvc;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly DatabaseManager DB = DatabaseManager.Instance();
    }
}
