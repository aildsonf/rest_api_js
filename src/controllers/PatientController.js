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
  async read(req, res) {
    const { id_card } = req.params.id_card;
    const patient = await Patient.findOne({ id_card });
    return res.json(patient);
  },

  async create(req, res) {
    const { id_card } = req.body;
    try {
      // avoid data duplication
      if (await Patient.findOne({ id_card })) {
        return res.status(400).send({ error: "error: patient already exists" });
      }
      // create a new patient
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

  async delete(req, res) {
    const patient = await Patient.findByIdAndRemove(req.params.id);
    return res.send("removed");
  },
};
