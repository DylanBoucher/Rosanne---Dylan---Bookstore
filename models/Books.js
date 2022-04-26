const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title cannot be empty."],
    },
    price: {
        type: Number,
        min: [0, 'You cannot have a negative price.'],
        required: [true, "Price cannot be empty."]
    },
    image: {
        type: String,
        required: [true, "Must have image."],
    },
    author: {
        type: String,
        required: [true, "Author cannot be empty."],
    },
    publisher: {
        type: String,
    },
    pages: {
        type: String,
        min: [0, "Cannot have less than 0 pages."]
    },
    summary: {
        type: String,
        // Commented out for convenience right now: required: [true, "Must have a summary."],
    },
}, {timestamps: true})

const Product = mongoose.model('Product', bookSchema)

module.exports = Product;