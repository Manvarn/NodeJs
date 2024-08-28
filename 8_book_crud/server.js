const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
app.use (bodyparser.json());
app.use(express.json());

app.listen(7071, () => {
    console.log("server listening the port number 7071");
});

mongoose.connect("mongodb://127.0.0.1:27017/krunal");
var books = require("./book"); //file name

app.get("/getBook",(req,res)=>{
  console.log("get all Book")
  books.find({}).then((books) => {
    console.log(books)
    res.json(books)
  }).catch((err) => {
    res.send(err)
  });
})

var bookData = require("./bookData");
app.post("/insertB",(req,res)=>{
  // console.log(bookData.bookD);
  const result = books.insertMany(bookData.bookD); // insert file name in vs
  res.send(result);
});


app.put("/update/:year",(req,res)=>{
  let updates = req.body
  console.log (updates," - ",req.params.year)
  books.findOneAndUpdate({year:req.params.year},updates, {"writer":"req.body.writer"})
  .then (book => res.json (book))
  .catch (err => res.status (400).json("Error:"+ err))
})

app.delete("/delete/:writer",(req,res)=>{
  // console.log (typoeof(parseInt),req.params.sno )
  books.deleteOne({writer:req.params.writer})
    .then(() => res.json ("book delete =("))
    .catch (err => res.status (400).json("Error:"+ err))
})





// contact Manager - name,no,address,email
// books
