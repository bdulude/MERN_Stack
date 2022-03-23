const Product = require('../models/product.model');

module.exports = {

    // Create
    create : (req, res) => {
        Product.create(req.body)
            .then( newProduct => {
                console.log("POST new");
                console.log(newProduct);
                return res.json(newProduct)
            })
            .catch(err => res.json(err))
    },

    // Read all
    findAll : (req, res) => {
        Product.find()
            .then( (productList) => {
                console.log("GET all");
                console.log(productList);
                return res.json({products: productList})
            })
            .catch(err => res.json(err))
    },

    // Read One
    findOne : (req, res) => {
        Product.findById(req.params.id)
            .then(product => {
                console.log("GET", req.params.id);
                console.log(product);
                return res.json(product)
            })
            .catch(err => res.json(err))
    },

    // Update
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedProduct => {
                console.log("PUT ", req.params.id);
                console.log(updatedProduct);
                return res.json(updatedProduct)
            })
            .catch(err => res.json(err))
    },

    // Delete
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(deletedProduct => {
                console.log("DELETE ", req.params.id);
                console.log(deletedProduct);
                return res.json(deletedProduct)
            })
            .catch(err => res.json(err))
    }

}