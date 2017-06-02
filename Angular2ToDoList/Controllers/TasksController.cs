using Angular2ToDoList.Models;
using Angular2ToDoList.Services;
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
        private TaskService taskService;

        public TasksController()
        {
            this.taskService = new TaskService();
        }

        public HttpResponseMessage GetTasks()
        {
            return Request.CreateResponse(HttpStatusCode.OK, taskService.Get());
        }
        [HttpPost]
        public HttpResponseMessage AddTask([FromBody]Task taskToAdd)
        {
            taskService.AddTask(taskToAdd);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpPut]
        public HttpResponseMessage EditTask([FromBody] Task taskToEdit)
        {
            int x;
            taskService.UpdateTask(taskToEdit);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        [HttpDelete]
        public HttpResponseMessage DeleteTask([FromBody]int id)
        {
            var taskToDelete = taskService.GetSingle(t => t.Id == id);
            taskService.DeleteTask(taskToDelete);
            return Request.CreateResponse(HttpStatusCode.OK);
        }


    }
}
