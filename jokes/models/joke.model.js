const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, 'Joke needs a {PATH}'],
        minlength: [4, '{PATH} needs to be at least 4 characters.']
    },
    punchline : {
        type: String,
        required: [true, 'Joke needs a {PATH}'],
        minlength: [4, '{PATH} needs to be at least 4 characters.']
    }
}, {timestamps: true});

module.exports = mongoose.model('Joke', JokeSchema);