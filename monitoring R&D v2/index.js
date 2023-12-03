const express = require("express");
var swStats = require("swagger-stats");
const app = express();

// /swagger-stats/metrics
app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", (req, res) => {
  res.send("Comments");
});

app.get("/threads", (req, res) => {
  res.send("Threads");
});

app.get("/replies", (req, res) => {
  res.send("replies");
});

const port = 2000; // Provide an appropriate value for the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
