using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class DeSmurfedUpVotes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QUpVotes",
                table: "Question",
                newName: "UpVotes");

            migrationBuilder.RenameColumn(
                name: "QDownVotes",
                table: "Question",
                newName: "DownVotes");

            migrationBuilder.RenameColumn(
                name: "AUpVote",
                table: "Answer",
                newName: "UpVotes");

            migrationBuilder.RenameColumn(
                name: "ADownVote",
                table: "Answer",
                newName: "DownVotes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpVotes",
                table: "Question",
                newName: "QUpVotes");

            migrationBuilder.RenameColumn(
                name: "DownVotes",
                table: "Question",
                newName: "QDownVotes");

            migrationBuilder.RenameColumn(
                name: "UpVotes",
                table: "Answer",
                newName: "AUpVote");

            migrationBuilder.RenameColumn(
                name: "DownVotes",
                table: "Answer",
                newName: "ADownVote");
        }
    }
}
