const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Everything OK (or at least enough to show this)");
});

module.exports = routes;
