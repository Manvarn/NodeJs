const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address : {
        type : String,
    },
    email: {
        type: String,
    },
    phone: [
        {
            ph1 : Number,
            ph2 : Number,
        }
    ]
})

exports.Contact = mongoose.model('contact', contactSchema);

