const express = require("express");
const router = express.Router();
const EnclosureModel = require("../Models/EnclosureModel");

router.post("/addEnclosure", async (req, res) => {
  const newEnclosure = new EnclosureModel({
    EnclosureName: req.body.name,
    Size: req.body.size,
    TemperatureInCelsius: req.body.temperature,
    HabitatType: req.body.type,
  });

  await newEnclosure.save();

  res.sendStatus(200);
});

router.get("/getEnclosures", async (req, res) => {
  let foundEnclosures = await EnclosureModel.find({});

  if (!foundEnclosures) {
    res.send("No data!");
    return;
  }

  res.send(foundEnclosures);
});

router.delete("/deleteEnclosure/:id", async (req, res) => {
  await EnclosureModel.findByIdAndDelete(req.params.id);

  res.send("Enclosure deleted!");
});

module.exports = router;
