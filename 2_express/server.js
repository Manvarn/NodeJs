const express = require("express");
const app = express();
app.get ("/",(req,res)=>{
    res.write("hello");
    res.end();
})
app.get("/login",(req,res)=>{
    res.write("hello login");
    res.end();
})

app.listen(7071,()=>{
    console.log("server connected port at 7071")
})

