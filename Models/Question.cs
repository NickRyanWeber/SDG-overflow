using System;
using System.Collections.Generic;

namespace SDG_overflow.Models
{
  public class Question
  {
    public int Id { get; set; }
    public string QuestionTitle { get; set; }
    public string QuestionDescription { get; set; }
    public int UpVotes { get; set; }
    public int DownVotes { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.Now;
    public List<Answer> Answer { get; set; } = new List<Answer>();
    public int? UserId { get; set; }
    public User User { get; set; }
  }
}