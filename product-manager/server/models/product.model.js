const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'Product needs a {PATH}.'],
        minlength: [3, '{PATH} needs to be at least 3 characters.']
    },
    price : {
        type: Number,
        required: [true, 'Product needs a {PATH}.'],
        min: [0, 'Product cannot have a price below 0.']
    },
    description : {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);