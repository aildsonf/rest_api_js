const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express(); // init app
app.use(express.json()); // allows data exchanging in .json format

// connection to mongodb
mongoose.connect(requireDir("./src/database"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

app.use("/api", require("./src/routes")); // routes
app.listen(5000);
