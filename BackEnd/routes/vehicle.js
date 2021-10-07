const { Vehicle, validate } = require("../models/vehicle");
const validateObjectId = require("../middleware/validateObjectId");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find()
   .select("-__v")
   .sort("name");
  res.send(vehicles);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const vehicle = new Vehicle({
    owner: req.body.owner, 
    vehicleNumber: req.body.vehicleNumber,
    makersClass: req.body.makersClass,
    vehicleClass: req.body.vehicleClass,
    engineCC:req.body.engineCC
  });
    await vehicle.save();
  res.send(vehicle);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const vehicle = await Vehicle.findByIdAndUpdate(
    req.params.id,
    {
    owner: req.body.owner, 
    vehicleNumber: req.body.vehicleNumber,
    makersClass: req.body.makersClass,
    vehicleClass: req.body.vehicleClass,
    engineCC:req.body.engineCC
    },
    { new: true }
  );

  if (!vehicle)
    return res.status(404).send("The vehicle with the given ID was not found.");
  res.send(vehicle);
});

router.delete("/:id", async (req, res) => {
  const vehicle = await Vehicle.findByIdAndRemove(req.params.id);

  if (!vehicle)
    return res.status(404).send("The vehicle with the given ID was not found.");
  res.send(vehicle);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id).select("-__v");

  if (!vehicle)
    return res.status(404).send("The vehicle with the given ID was not found.");
  res.send(vehicle);
});

module.exports = router;
