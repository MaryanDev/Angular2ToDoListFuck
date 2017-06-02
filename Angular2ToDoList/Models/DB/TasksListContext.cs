using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Angular2ToDoList.Models.DB
{
    public class TasksListContext : DbContext
    {
        public TasksListContext() : base("name=TasksConnection")
        {

        }

        public virtual DbSet<Task> Tasks { get; set; }
    }
}