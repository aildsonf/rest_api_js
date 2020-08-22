const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // allows data exchanging in .json format

// connection to mongodb, using the connection URI provided in the file db_auth.js
mongoose.connect(require("./database/db_auth"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", require("./routes")); // routes
app.listen(5000);
