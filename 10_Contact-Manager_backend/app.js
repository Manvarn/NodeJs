const express = require("express");
const app = express();
// const morgan = require("morgan");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv/config");

// app.use(cors());
// app.options("*", cors());

//middleware
app.use(express.json());
// app.use(morgan("tiny"));


//Routes
const contactsRoutes = require("./routes/contacts");


const api = process.env.API_URL;
console.log(`my api :  ${api}`);


app.use(`${api}/contacts`, contactsRoutes);


//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    dbName: "contact",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });


//Server
app.listen(7072, () => {
  console.log("server is running http://localhost:7072");
});