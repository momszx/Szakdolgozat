using Microsoft.AspNetCore.Mvc;

namespace Szakdolgozat.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly DatabaseManager DB = DatabaseManager.Instance();
    }
}
