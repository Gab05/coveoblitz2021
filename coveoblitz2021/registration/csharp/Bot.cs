using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Blitz
{
    [ApiController]
    [Route("[controller]")]
    public class MyBot : ControllerBase
    {
        [HttpPost("/microchallenge")]
        public ActionResult Solve([FromBody] Problem problem)
        {
            Console.WriteLine("\n\n\n-------------------------- REQUEST LOGS STARTING HERE --------------------------");
            Console.WriteLine("You can log stuff and download the logs from the UI in the replay section.");
            Console.WriteLine("Here is the current problem:");
            Console.WriteLine(problem); // problem is in json format
            Console.WriteLine("---------------------------------------------------------------------------------");

            return Ok(new int[] { 3, 2 });
        }
    }

    public class Problem
    {
        public int[][] items { get; set; }
        public int[] track { get; set; }

        public override string ToString() {
            return JsonConvert.SerializeObject(this, Formatting.None);
        }
    }
}