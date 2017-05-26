using Angular2ToDoList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2ToDoList.Controllers
{
    public class TasksController : ApiController
    {
        static List<Task> tasks = new List<Task>
            {
                new Task
                {
                    Id = 1,
                    Text = "Learn Angular2",
                    Importance = Importances.VeryHigh,
                    IsDone = false
                },
                new Task
                {
                    Id = 2,
                    Text = "Earn a lot of money",
                    Importance = Importances.High,
                    IsDone = false
                },
                new Task
                {
                    Id = 3,
                    Text = "Find a job",
                    Importance = Importances.VeryHigh,
                    IsDone = true
                }
            };

        public HttpResponseMessage GetTasks()
        {
            return Request.CreateResponse(HttpStatusCode.OK, tasks);
        }
        [HttpPost]
        public HttpResponseMessage AddTask([FromBody]Task taskToAdd)
        {
            tasks.Add(taskToAdd);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpPut]
        public HttpResponseMessage EditTask([FromBody] Task taskToEdit)
        {
            var index = tasks.FindIndex(t => t.Id == taskToEdit.Id);
            tasks[index] = taskToEdit;

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        [HttpDelete]
        public HttpResponseMessage DeleteTask([FromBody]int id)
        {
            var taskToDelete = tasks.Where(t => t.Id == id).FirstOrDefault();
            tasks.Remove(taskToDelete);
            return Request.CreateResponse(HttpStatusCode.OK);
        }


    }
}
