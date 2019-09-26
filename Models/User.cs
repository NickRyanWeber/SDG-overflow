using System;
using System.Collections.Generic;

namespace SDG_overflow.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Email { get; set; }
    public string UserName { get; set; }
    public string HashedPassword { get; set; }
    public DateTime DateSignedUp { get; set; } = DateTime.Now;
    public DateTime LastLoggedInAt { get; set; } = DateTime.Now;
    public List<Answer> Answer { get; set; } = new List<Answer>();
    public List<Question> Question { get; set; } = new List<Question>();
  }
}