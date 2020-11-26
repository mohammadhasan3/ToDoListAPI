const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const listdata = require("./listdata");

//routes
const listRoutes = require("./routes/listdata");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/list", listRoutes);

// app.post("/cookies", CreateTask);

app.listen(8000, () => {
  console.log("Running on port 8000");
});