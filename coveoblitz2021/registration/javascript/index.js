const express = require("express");
const { argv } = require("yargs");
const app = express();

const PORT = argv.port || argv.p || 27178;

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(express.json());

app.post("/microchallenge", (req, res) => {
  const d = [];

  req.body.track.forEach((t, i) => i ?
    req.body.track[i] = t + req.body.track[i - 1]
    : req.body.track[i] = t);

  req.body.items.forEach(item => {
    if (!item[0])
      d.push(req.body.track[item[1] - 1]);
    else if (!item[1])
      d.push(req.body.track[item[0] - 1]);
    else
      d.push(Math.abs(req.body.track[item[0] - 1] - req.body.track[item[1] - 1]))
  });

  res.json(d);
});

app.listen(PORT);
