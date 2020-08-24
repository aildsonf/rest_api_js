const mongoose = require("mongoose");
const Patient = mongoose.model("Patient");

// data manipulation (CRUD functions)
// HTTP response status codes: https://developer.cdn.mozilla.net/en-US/docs/Web/HTTP/Status
module.exports = {
  // list all stored data (with no pagination)
  async index(req, res) {
    const patients = await Patient.find();
    return res.json(patients);
  },

  // retrieve a specific patient
  async read(req, res) {
    try {
      const patient = await Patient.findById(req.params.id);
      return res.json(patient);
    } catch (err) {
      return res.status(404).send(err);
    }
  },

  async create(req, res) {
    const { id_card } = req.body;
    try {
      // avoid data duplication
      if (await Patient.findOne({ id_card })) {
        return res.status(400).send({ error: "patient already exists" });
      }
      // create a new patient
      const patient = await Patient.create(req.body);
      return res.json(patient);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // returns updated patient
      });
      return res.json(patient);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async delete(req, res) {
    try {
      const patient = await Patient.findByIdAndRemove(req.params.id);
      if (!patient) {
        res.status(404).send("patient not found or already removed");
      }
      return res.send("patient removed");
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
