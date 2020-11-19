import express = require("express");
import { Request, Response } from "express";
import * as yargs from "yargs";

const app = express();
var argv = yargs.number("p").number("port").argv;
const PORT = argv.port || argv.p || 27178;

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(express.json());

app.post("/microchallenge", (req: Request, res: Response) => {
  console.log(
    "\n\n\n-------------------------- REQUEST LOGS STARTING HERE --------------------------"
  );
  console.log(
    "You can log stuff and download the logs from the UI in the replay section."
  );
  console.log("Here is the current problem:");
  console.log(req.body);
  console.log(
    "---------------------------------------------------------------------------------"
  );

  res.json([3, 2, 1]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
