using System;

namespace SDG_overflow.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string AnswerDescription { get; set; }
    public int UpVotes { get; set; }
    public int DownVotes { get; set; }
    public DateTime DateAdded { get; set; } = DateTime.Now;
    public int QuestionId { get; set; }
    public Question Question { get; set; }
    public int? UserId { get; set; }
    public User User { get; set; }
  }
}