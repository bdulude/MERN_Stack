const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Author needs a {PATH}.'],
        minlength: [3, '{PATH} needs to be at least 3 characters.']
    }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);