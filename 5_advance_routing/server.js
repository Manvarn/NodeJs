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


let router = express.Router();
app.use("/admin",router);

router.get("/career",(req,res)=>{
    res.sendFile(__dirname+"/admin/career.html");
})
router.get("/dashbord",(req,res)=>{
    res.sendFile(__dirname+"/admin/dashbord.html");
})
router.get("/sales",(req,res)=>{
    res.sendFile(__dirname+"/admin/sales.html");
})