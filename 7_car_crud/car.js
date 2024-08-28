// 'use strict';

var mongoose = require("mongoose");
var carsSchema = new mongoose.Schema(
  {
    sno: Number,
    cname: String,
    ccolor: String,
    ccompany: String,
  }
);
module.exports = mongoose.model('cars', carsSchema);

