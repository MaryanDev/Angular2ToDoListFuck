using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular2ToDoList.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }

        public string Text { get; set; }

        [Column(TypeName = "date")]
        public DateTime DateCreated { get; set; }

        [Column(TypeName = "date")]
        public DateTime EndDate { get; set; }

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