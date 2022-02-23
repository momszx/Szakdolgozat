using Microsoft.AspNetCore.Mvc;
using Szakdolgozat.Classes;

namespace Szakdolgozat.Controllers
{
    public class PermissionController : ControllerBase
    {
        private readonly DatabaseManager DB = DatabaseManager.Instance();
    }
}
