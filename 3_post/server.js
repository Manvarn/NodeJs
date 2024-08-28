// const express = require("express");
// const app = express();
// app.get ("/",(req,res)=>{
//     res.write("hello server");
//     res.end();
// })
// app.get ("/login",(req,res)=>{
//     res.write("hello server login");
//     res.end();
// })

// app.listen(7071,()=>{
//     console.log("server connected port at 7071")
// })

// ---------------------------------

// const express = require ("express");
// const bodyparser = require ("body-parser");
// const app = express();

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/login.html");
// })

// app.post("/login",(req,res)=>{
//     console.log(req,body);
//     if (req.body.uname=='admin' && req.body.upwd=='admin')
//     {
//         res.send("login Sucess");
//     }
//     else
//     {
//         res.send("login failed");
//     }
// })

// app.listen(7071,()=>{
//     console.log("server connected port at 7071");
// })

