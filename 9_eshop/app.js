const express = require("express");
const app = express();
require("dotenv/config");


// app.get ("/",(req,res)=>{
//     res.write("hello");
//     res.end();
// })



// Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const api = process.env.API_URL;
console.log(`my api : ${api}`);

app.use (`${api}/categories`,categoriesRoutes);
app.use (`${api}/products`,productsRoutes);
app.use (`${api}/users`,usersRoutes);
app.use (`${api}/orders`,ordersRoutes);

app.listen(7071,()=>{
    console.log("server connected port at 7071")
})

            
