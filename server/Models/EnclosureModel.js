const mongoose = require("mongoose");

const EnclosureSchema = new mongoose.Schema({
  EnclosureName: {
    type: String,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  HabitatType: {
    type: String,
    required: true,
  },
});

const EnclosureModel = mongoose.model("Enclosures", EnclosureSchema);
module.exports = EnclosureModel;
