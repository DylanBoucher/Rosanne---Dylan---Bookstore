const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    //Insert contents of schema here
})

const Product = mongoose.model('Product', bookSchema)

module.exports = Product;