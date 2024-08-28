const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log (req.url);
    console.log (req.method);
    console.log (req.headers);
    console.log (req.query);
    console.log (req.body);

    res.header('content-type',"text/html");
    res.status(200);
    // res.write("hello");
    // res.send("hello,what ?");
    // res.end();
    res.sendFile(__dirname+"/login.html");
})
app.listen(7071,()=>{
    console.log("server connected port at 7071");
})
