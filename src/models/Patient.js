const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },

  id_card: {
    type: Number,
    min: 0,
    max: 99999999999,
    validate(value) {
      if (value < 0) throw new Error("invalid input");
    },
    required: true,
  },

  age: {
    type: Number,
    min: 0,
    validate(value) {
      if (value < 0) throw new Error("invalid input");
    },
    required: true,
  },

  createdAt: { type: Date, default: Date.now },
});

mongoose.model("Patient", PatientSchema);

// Mongoose SchemaTypes docs: https://mongoosejs.com/docs/schematypes.html
