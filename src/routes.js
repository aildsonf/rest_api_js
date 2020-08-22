const express = require("express");
const routes = express.Router();

const PatientController = require("./controllers/PatientController");

routes.get("/patients", PatientController.index);
routes.get("/patients/:id", PatientController.show);
routes.post("/patients", PatientController.store);
routes.put("/patients/:id", PatientController.update);
routes.delete("/patients/:id", PatientController.destroy);

module.exports = routes;
