const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect(require("./src/database/db_auth"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");
const Patient = mongoose.model("Patient");

app.use("/api", require("./src/routes"));

app.listen(5000);
