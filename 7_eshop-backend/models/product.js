const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    brand: {
        type: String,
        default: ''
    },
    price : {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);


// "name":"Cheese",
// "description":" Amul",
// "richDescription":"Amul Cheese can enhance the taste of any dish, whether you consume it whole or melt it in your food. Amul Cheese Processed Cheese Spread is made from high-quality ingredients and is prepared using graded cow/buffalo milk and microbial rennet. It is a perfect addition for stuffing sandwiches, burgers, omelettes etc. Get Amul Cheese Slices online now. ",
// "image":"image_1",
// "brand":"Amul",
// "price":390,
// "category":"Food",
// "countInStock":"13",
// "rating":4,
// "numReviews":4,
// "isFeatured":1