const express = require("express");
const PORT = 3000;

const app = express();

app.get("/home", (req, res) => {
  console.log("Home route hit");
  res.send("Hello from the back end");
});

app.listen(PORT, () => {
  console.log("App listining on port 3000");
});
