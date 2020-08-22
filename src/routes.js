const express = require("express");
const routes = express.Router();

const PatientController = require("./controllers/PatientController");

routes.get("/patients", PatientController.index);
routes.get("/patients/:id", PatientController.read);
routes.post("/patients", PatientController.create);
routes.put("/patients/:id", PatientController.update);
routes.delete("/patients/:id", PatientController.delete);

module.exports = routes;
