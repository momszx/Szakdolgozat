using Microsoft.AspNetCore.Mvc;

namespace Szakdolgozat.Controllers
{
    public class PermissionController : ControllerBase
    {
        private readonly DatabaseManager DB = DatabaseManager.Instance();
    }
}
