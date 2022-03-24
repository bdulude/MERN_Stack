const Author = require('../models/author.model');

module.exports = {

    // Create
    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                console.log("POST new");
                console.log(newAuthor);
                return res.json(newAuthor)
            })
            .catch(err => res.status(400).json(err))
    },

    // Read all
    findAll: (req, res) => {
        Author.find()
            .then((authorList) => {
                console.log("GET all");
                console.log(authorList);
                return res.json({ authors: authorList })
            })
            .catch(err => res.status(400).json(err))
    },

    // Read One
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                console.log("GET", req.params.id);
                console.log(author);
                return res.json(author)
            })
            .catch(err => res.status(400).json(err))
    },

    // Update
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedAuthor => {
                console.log("PUT ", req.params.id);
                console.log(updatedAuthor);
                return res.json(updatedAuthor)
            })
            .catch(err => res.status(400).json(err))
    },

    // Delete
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deletedAuthor => {
                console.log("DELETE ", req.params.id);
                console.log(deletedAuthor);
                return res.json(deletedAuthor)
            })
            .catch(err => res.status(400).json(err))
    }

}