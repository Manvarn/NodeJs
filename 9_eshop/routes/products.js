const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    console.log("products")
    res.send("products")
})

module.exports= router;