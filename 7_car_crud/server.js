const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.listen(7071, () => {
    console.log("server listening the port number 7071");
});

mongoose.connect("mongodb://127.0.0.1/iant");
var car = require("./car"); //file name

app.get("/getDetail",(req,res)=>{
  console.log("get all car detail")
  car.find({}).then((data) => {
    console.log(car)
    res.json(data)
  }).catch((err) => {
    res.send(err)
  });

})


var carData = require("./carData");  //filename
app.post("/getDetail1",(req,res)=>{
  console.log(car.carD);
  const result = car.insertMany(carData.carD);
  res.send(result);
});

