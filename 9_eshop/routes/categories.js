const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    console.log("categories")
    res.send("categories")
})

module.exports= router;

