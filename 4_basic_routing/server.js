// this called routing 
// one kind of dynamic

const express = require("express");
const app = express();

app.get("/home/deshbroad",(req,res)=>{
    res.sendFile(__dirname+"/templates/home.html");
})
app.get("/login/signup",(req,res)=>{
    res.sendFile(__dirname+"/templates/login.html");
})
app.get("/contact/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/templates/contact.html");
})

app.listen(7071,()=>{
    console.log("Server connected port at 7071")
})

