// // get data koi data  mokal vanu hoy to aene query string.

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     const q = url.parse(req.url, true).query;
//     console.log(req.url);
//     console.log(q);

//     if(q.uname == "admin" && q.upwd == "admin"){
//         res.write("<h1>Login Success</h1>");
//     }
//     else{
//         res.write("<h1>Login Fail</h1>");
//     }
//     res.end();
// });

// //assign the port number
// server.listen(7071,()=>{
//     console.log("Server Listening the port number 7071");
// });

