package codes.blitz.game;

import java.util.Map;
import java.util.List;
import io.javalin.Javalin;
import picocli.CommandLine;
import picocli.CommandLine.Option;

public class Application
{
  public static class Args {
    @Option(names = { "-p", "--port" },
        description = "set port number (default: 27178)",
        defaultValue = "27178")
    public int port;
  }

  public static void main (String [] args) {
    Args arguments = new Args();
    new CommandLine(arguments).parseArgs(args);

    Javalin app = Javalin.create(javalinConfig -> {
      javalinConfig.requestCacheSize = 1000 * 1000 * 2L;
    }).start(arguments.port);
    app.post("/microchallenge", ctx -> {
      
      System.out.println("\n\n\n-------------------------- REQUEST LOGS STARTING HERE --------------------------");
      System.out.println("You can log stuff and download the logs from the UI in the replay section.");
      System.out.println("Here is the current problem:");
      System.out.println(ctx.body()); // problem is in json format
      System.out.println("---------------------------------------------------------------------------------");
      
      ctx.json(List.of(2,4));
    });
  }

}
