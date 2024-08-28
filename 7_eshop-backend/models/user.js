const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    image: String,
    contact:Number,
    emailid:String,
})

exports.User = mongoose.model('User', userSchema);
