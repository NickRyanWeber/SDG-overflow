// https://github.com/aspnet/EntityFramework.Docs/blob/master/samples/core/Modeling/DataSeeding/DataSeedingContext.cs

// using Microsoft.EntityFrameworkCore;
// using SDG_overflow.Models;

// namespace SDG_overflow
// {
//   public class DataSeedingContext : DbContext
//   {
//     public DbSet<Question> Questions { get; set; }
//     public DbSet<Answer> Answers { get; set; }

//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//             => optionsBuilder
//                 .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=EFDataSeeding;Trusted_Connection=True;ConnectRetryCount=0");

//     protected override void OnModelCreating(ModelBuilder modelBuilder)
//     {
//       modelBuilder.Entity<Question>(entity =>
//       {
//         entity.Property(e => e.Url).IsRequired();
//       });

//       #region QuestionSeed
//       modelBuilder.Entity<Question>().HasData(new Question { QuestionId = 1, Url = "http://sample.com" });
//       #endregion

//       modelBuilder.Entity<Answer>(entity =>
//       {
//         entity.HasOne(d => d.Question)
//                   .WithMany(p => p.Answers)
//                   .HasForeignKey("QuestionId");
//       });

//       #region AnswerSeed
//       modelBuilder.Entity<Answer>().HasData(
//           new Answer() { QuestionId = 1, AnswerId = 1, Title = "First Answer", Content = "Test 1" });
//       #endregion

//       #region AnonymousAnswerSeed
//       modelBuilder.Entity<Answer>().HasData(
//           new { QuestionId = 1, AnswerId = 2, Title = "Second Answer", Content = "Test 2" });
//       #endregion

//       #region OwnedTypeSeed
//       modelBuilder.Entity<Answer>().OwnsOne(p => p.AuthorName).HasData(
//           new { PostId = 1, First = "Andriy", Last = "Svyryd" },
//           new { PostId = 2, First = "Diego", Last = "Vega" });
//       #endregion
//     }
//   }
// }