const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const categoryList = await Category.find();
    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.send(categoryList);
})
router.get('/:id', async(req,res)=>{
    const category = await Category.findById(req.params.id);

    if(!category) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    res.status(200).send(category);
})

// http://localhost:7071/api/eshop/categories  
// post_categories
///  Data in req body
// {
//   "name":"Heath Cate",
//   "icone":"Health",
//   "color":"#FFOOFF"
// }
router.post('/', async (req,res)=>{
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    console.log(category);
    category = await category.save();

    if(!category)
    return res.status(400).send('the category cannot be created!')

    res.send(category);
})

module.exports =router;