using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using sdg_overflow;
using SDG_overflow.Models;

namespace SDG_overflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QuestionsController : ControllerBase
  {
    private DatabaseContext context;

    public QuestionsController(DatabaseContext _context)
    {
      this.context = _context;
    }

    [HttpPost]
    public ActionResult<Question> CreateQuestion([FromBody]Question entry)
    {
      context.Question.Add(entry);
      context.SaveChanges();
      return entry;
    }

    [HttpGet("{id}")]
    public ActionResult<Question> GetOneQuestion(int id)
    {
      var oneQuestion = context.Question.FirstOrDefault(q => q.Id == id);
      if (oneQuestion == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(oneQuestion);
      }
    }

    [HttpGet]
    public ActionResult<IEnumerable<Question>> GetAllQuestions()
    {
      var questions = context.Question.OrderBy(q => q.DateCreated);
      return questions.ToList();
    }
  }
}