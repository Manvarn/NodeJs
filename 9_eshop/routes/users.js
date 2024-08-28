const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    console.log("users")
    res.send("User")
})

module.exports= router;