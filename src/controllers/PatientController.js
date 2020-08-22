const mongoose = require("mongoose");
const Patient = mongoose.model("Patient");

// data manipulation (CRUD functions)
module.exports = {
  // list all stored data (with no pagination)
  async index(req, res) {
    const patients = await Patient.find();
    return res.json(patients);
  },

  // retrieve a specific patient
  async show(req, res) {
    const patient = await Patient.findById(req.params.id);
    return res.json(patient);
  },

  // create and store a new patient
  async store(req, res) {
    try {
      const patient = await Patient.create(req.body);
      return res.json(patient);
    } catch (err) {
      return res.status(400).send({ error: "failed" });
    }
  },

  async update(req, res) {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // returns updated patient
    });
    return res.json(patient);
  },

  // removes a specific patient
  async destroy(req, res) {
    const patient = await Patient.findByIdAndRemove(req.params.id);
    return res.send("removed");
  },
};
