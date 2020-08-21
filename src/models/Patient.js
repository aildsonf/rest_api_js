const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model("Patient", PatientSchema);

// SchemaTypes available at: https://mongoosejs.com/docs/schematypes.html
