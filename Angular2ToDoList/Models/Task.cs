using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;


namespace Angular2ToDoList.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Text { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Importances Importance { get; set; }
        public bool IsDone { get; set; }
    }

    public enum Importances
    {
        VeryLow,
        Low,
        Intermediate,
        High,
        VeryHigh
    }
}