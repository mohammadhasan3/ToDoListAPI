const express = require("express");
const cors = require("cors");
const listdata = require("./listdata");
const app = express();
app.use(cors());

app.get("/list", (req, res) => {
  res.json(listdata);
});

app.listen(8000, () => {
  console.log("Running on port 8000");
});
