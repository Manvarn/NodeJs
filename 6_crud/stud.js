// 'use strict';

var mongoose = require("mongoose");
var studsSchema = new mongoose.Schema(
  {
    sno: Number,
    sname: String,
    fees: Number,
    course: String,
  }
);
module.exports = mongoose.model('studs', studsSchema);

