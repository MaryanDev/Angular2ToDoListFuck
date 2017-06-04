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
        private int pageSize = 3;

        public List<Task> Get(int page, Func<Task, bool> criteria = null)
        {
            List<Task> result;
            using(var context = new TasksListContext())
            {
                result = (criteria != null ? context.Tasks.Where(criteria): context.Tasks)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToList();
            }

            return result;
        }

        public int GetPagesCount()
        {
            int result = 0;
            using(var context = new TasksListContext())
            {
                var tasksCount = context.Tasks.Count();
                result = tasksCount % pageSize != 0 ? (tasksCount / pageSize) + 1 : tasksCount / pageSize;
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
            task.DateCreated = DateTime.Now;
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

                context.SaveChanges();
            }
        }

        public void DeleteTask(int id)
        {
            using (var context = new TasksListContext())
            {
                var taskToDelete = context.Tasks.Where(t => t.Id == id).FirstOrDefault();
                context.Set<Task>().Remove(taskToDelete);

                context.SaveChanges();
            }
        }
    }
}