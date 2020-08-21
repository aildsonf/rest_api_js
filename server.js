const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://ctrlferr:F4srW8Xd9mYbyHAK@cluster0-shard-00-00.9t58x.mongodb.net:27017,cluster0-shard-00-01.9t58x.mongodb.net:27017,cluster0-shard-00-02.9t58x.mongodb.net:27017/project?ssl=true&replicaSet=atlas-myg7c3-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send("Hello!");
});
app.listen(5000);
