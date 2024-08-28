const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
app.use (bodyparser.json());
app.use(express.json());

app.listen(7071, () => {
    console.log("server listening the port number 7071");
});

mongoose.connect("mongodb://127.0.0.1:27017/iant");
var stud = require("./stud");

app.get("/getData",(req,res)=>{
  console.log("get all stud")
  stud.find({}).then((data) => {
    console.log(stud)
    res.json(data)
  }).catch((err) => {
    res.send(err)
  });

})



var studData = require("./studData");
app.post("/insert",(req,res)=>{
  console.log(studData.student);
  const result = stud.insertMany(studData.student); // insert file name in vs
  res.send(result);
});

app.put("/update/:sno",(req,res)=>{
  let updates = req.body
  console.log (updates," - ",req.params.sno )
  stud.findOneAndUpdate({sno:req.params.sno},updates, {"fees":req.body.fees})
  .then (stud => res.json (stud))
  .catch (err => res.status (400).json("Error:"+ err))
})

app.delete("/delete/:sno",(req,res)=>{
  // console.log (typoeof(parseInt),req.params.sno )
  stud.deleteOne({sno:req.params.sno})
    .then(() => res.json ("stud delete =("))
    .catch (err => res.status (400).json("Error:"+ err))
})

