const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const productList = await Product.find();
    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

router.post(`/`, (req, res) =>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })


router.put('/:id',async (req, res)=> {
        if(!mongoose.isValidObjectId(req.params.id)) {
           return res.status(400).send('Invalid Product Id')
        }
        const category = await Category.findById(req.body.category);
        if(!category) return res.status(400).send('Invalid Category')
    


    const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
        },
        { new: true}
    )
    
    if(!product)
    return res.status(500).send('the product cannot be updated!')
    
    res.send(product);
})


router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
        return res.status(404).json({success: false , message: "product not found!"})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err}) 
    })
})
    

router.get(`/get/count`, async (req, res) =>{
    const productCount = await Product.countDocuments((count) => count)

    if(!productCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        productCount: productCount
    });
})


product.save().then((createdProduct=> {
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})


module.exports =router;