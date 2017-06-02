using Angular2ToDoList.Models;
using Angular2ToDoList.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2ToDoList.Services
{
    public class TaskService
    {
        public List<Task> Get(Func<Task, bool> criteria = null)
        {
            List<Task> result;
            using(var context = new TasksListContext())
            {
                result = criteria != null ? context.Tasks.Where(criteria).ToList() : context.Tasks.ToList();
            }

            return result;
        }

        public Task GetSingle(Func<Task, bool> criteria)
        {
            Task result;
            using (var context = new TasksListContext())
            {
                result = context.Tasks.Where(criteria).FirstOrDefault();
            }

            return result;
        }
        public void AddTask(Task task)
        {
            using(var context = new TasksListContext())
            {
                context.Tasks.Add(task);
                context.SaveChanges();
            }
        }

        public void UpdateTask(Task task)
        {
            using(var context = new TasksListContext())
            {
                context.Set<Task>().Attach(task);
                context.Entry(task).State = System.Data.Entity.EntityState.Modified;
            }
        }

        public void DeleteTask(Task task)
        {
            using (var context = new TasksListContext())
            {
                context.Set<Task>().Remove(task);
            }
        }
    }
}