using Microsoft.AspNetCore.Mvc;
using sdg_overflow;

namespace SDG_overflow.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {
    private DatabaseContext context;
    public AuthController(DatabaseContext _context)
    {
      this.context = _context;
    }

    [HttpPost("login")]
    public ActionResult Login([FromBody] RegisterViewModel userData)
    {
      // find the user
      var user = context.Users.FirstOrDefault()
    }

  }
}