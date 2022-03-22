const Joke = require('../models/joke.model');

module.exports = {

    // Create
    create : (req, res) => {
        Joke.create(req.body)
            .then( newJoke => res.json(newJoke))
            .catch(err => res.json(err))
    },

    // Read all
    findAll : (req, res) => {
        Joke.find()
            .then( (jokeList) => {
                return res.json({jokes: jokeList})
            })
            .catch(err => res.json(err))
    },

    // Read One
    findOne : (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },

    // Read Random
    findRandom : (req, res) => {
        Joke.find()
        .then( (jokeList) => {
            let rand = Math.floor(Math.random() * jokeList.length);
            return res.json(jokeList[rand]);
        })
        .catch(err => res.json(err))
    },

    // Update
    update: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err))
    },

    // Delete
    delete: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(deletedJoke => res.json(deletedJoke))
            .catch(err => res.json(err))
    }

}