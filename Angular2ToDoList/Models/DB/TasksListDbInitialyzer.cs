using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Angular2ToDoList.Models.DB
{
    public class TasksListDbInitialyzer : DropCreateDatabaseIfModelChanges<TasksListContext>
    {
        protected override void Seed(TasksListContext context)
        {
            List<Task> tasks = new List<Task>
            {
                new Task
                {
                    Title = "Earn Money",
                    Text = "Find out some way to get money",
                    Importance = Importances.High,
                    IsDone = false,
                    DateCreated = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(35),
                },
                new Task
                {
                    Title = "Lear Angular 2",
                    Text = "Investigate all main features of angular 2 front end framework",
                    Importance = Importances.VeryHigh,
                    IsDone = false,
                    DateCreated = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(7),
                }
            };

            foreach( var task in tasks)
            {
                context.Tasks.Add(task);
            }

            context.SaveChanges();
        }
    }
}