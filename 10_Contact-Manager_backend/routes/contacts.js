const {Contact} = require('../models/contact');
const express = require('express');
const router = express.Router();


// http://localhost:7072/api/contact/contacts  
// get_contacts


router.get(`/`, async (req, res) =>{
    const contactList = await Contact.find();
    if(!contactList) {
        res.status(500).json({success: false})
    } 
    res.send(contactList);
})

router.get('/:id', async(req,res)=>{
    const contact = await contact.findById(req.params.id);

    if(!contact) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    res.status(200).send(contact);
})

// http://localhost:7071/api/eshop/categories  
// post_categories

//  Data in req 
//-----------------------
// {
//   "name":"Ramesh",
//   "address":"Surat",
//   "email":"ramesh@gmail.com",
//   "phone": {
//     "ph1":123465789,
//     "ph1":123465789
//   }
// }


router.post('/', async (req,res)=>{
    let contact = new Contact({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    })
    console.log(contact);
    contact = await contact.save();

    if(!contact)
    return res.status(400).send('the category cannot be created!')

    res.send(contact);
})

module.exports =router;
