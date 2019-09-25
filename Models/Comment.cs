using System;

namespace SDG_overflow.Models
{
  public class Comment
  {
    public int Id { get; set; }
    public string AnswerDescription { get; set; }
    public int AUpVote { get; set; }
    public int ADownVote { get; set; }
    public DateTime DateAdded { get; set; } = DateTime.Now;
  }
}