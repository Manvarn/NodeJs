const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    console.log("orders")
    res.send("orders")
})

module.exports= router;