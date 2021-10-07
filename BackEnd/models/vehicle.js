const Joi = require('joi');
const mongoose = require('mongoose');

const Vehicle = mongoose.model('Vehicles', new mongoose.Schema({

  owner: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  vehicleNumber: { 
    type: String, 
    required: true,
    min: 0,
    max: 15
  },
  makersClass: { 
    type: String, 
    required: true,
    max: 50
  },
  vehicleClass: { 
    type: String, 
    required: true,
    max: 50
  },
  engineCC: { 
    type: Number, 
    required: true,
    min: 100,
    max:10000
  }
}));

function validateVehicle(vehicle) {
  const pattern=/^[0-9A-Z][0-9A-Z][0-9A-Z\s-ශ්‍රී][A-Z0-9\s-‍ශ්‍රී][0-9A-Z\s-][0-9\s-]+[0-9]$/
  const schema = {
        owner: Joi.string()
        .required(),
        vehicleNumber: Joi.string().regex(pattern, 'VALID INPUT') 
        .required(),
        makersClass:Joi.string()
        .required(),
        vehicleClass: Joi.string()
        .required(),
        engineCC: Joi.number()
        .required()
        .min(100)
        .max(10000)
  };

  return Joi.validate(vehicle, schema);
}

exports.Vehicle = Vehicle; 
exports.validate = validateVehicle;