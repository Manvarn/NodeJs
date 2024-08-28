// ----------------------- 13-05-2024 ----------------------

const http = require('http');
const fs = require('fs');
let app = http.createServer((request,response)=>{
    let myfile;
    if(request.url == "/home")
        myfile = "home.html";
    else if(request.url == "/contact")
        myfile = "contact.html";

    console.log(request.url," - ",myfile)
    fs.readFile(myfile,'utf-8',(error,data)=>{
        if(error){
            response.writeHead(500);
            response.write("cant read file");
        }
        else{
            response.setHeader('content-type','text/html');
            response.write(data);
        }
    })
})

app.listen(7071,()=>{
    console.log("Server Listening on port 7071")
})


// htpp 
// MERN
// E - express - framework for node

