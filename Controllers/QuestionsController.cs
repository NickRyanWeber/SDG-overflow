using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

    [HttpPost("{id}/Answer")]
    public ActionResult<Question> CreateAnswer(int id, [FromBody]Answer answer)
    {
      var question = context.Question.FirstOrDefault(q => q.Id == id);
      if (question == null)
      {
        return NotFound();
      }
      else
      {
        answer.QuestionId = id;
        context.Answer.Add(answer);
        context.SaveChanges();
        return Ok(new { });
      }
    }

    [HttpPut("{id}")]
    public ActionResult<Question> updateVoteCount(int id, [FromBody]Question update)
    {
      if (id != update.Id)
      {
        return BadRequest();
      }
      context.Entry(update).State = EntityState.Modified;
      context.SaveChanges();
      return update;
    }
    // [HttpPut("{id}/Answer/{aId}")]
    // public ActionResult


    [HttpGet("{id}")]
    public ActionResult<Question> GetOneQuestion(int id)
    {
      var oneQuestion = context.Question.Include(i => i.Answer).FirstOrDefault(q => q.Id == id);
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

    [HttpPatch("{id}/upVote")]
    public ActionResult<Question> updateUpVote(int id)
    {
      var question = context.Question.FirstOrDefault(q => q.Id == id);
      if (question == null)
      {
        return NotFound();
      }
      else
      {
        question.QUpVotes += 1;
        context.SaveChanges();
        return question;
      }
    }

    [HttpPatch("{id}/downVote")]
    public ActionResult<Question> updateDownVote(int id)
    {
      var question = context.Question.FirstOrDefault(q => q.Id == id);
      if (question == null)
      {
        return NotFound();
      }
      else
      {
        question.QDownVotes += 1;
        context.SaveChanges();
        return question;
      }
    }
  }
}