const express = require("express");
const app = express();

app.get("/login/signup",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.listen(7071,(req,res)=>{
    console.log("Server connected port at 7071");
})

