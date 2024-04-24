const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  Species: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  EnclosureID: {
    type: String,
    required: false,
  },
});

const AnimalModel = mongoose.model("Animals", AnimalSchema);
module.exports = AnimalModel;
