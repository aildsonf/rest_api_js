const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model("Patient", PatientSchema);

// Mongoose SchemaTypes docs: https://mongoosejs.com/docs/schematypes.html
