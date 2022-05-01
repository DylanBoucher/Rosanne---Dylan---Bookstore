const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Must have image."],
    },
    title: {
        type: String,
        required: [true, "Title cannot be empty."],
    },
    author: {
        type: String,
        required: [true, "Author cannot be empty."],
    },
    price: {
        type: Number,
        min: [0, 'You cannot have a negative price.'],
        required: [true, "Price cannot be empty."]
    },
    genre: {
        type: String,
    },
    condition: {
        type: String,
    },
    location: {
        type: String,
    },
    publishDate: {
        type: String,
        required: [true, "Please enter date of publication."]
    },
    pages: {
        type: Number,
        min: [0, "Cannot have less than 0 pages."]
    },
    summary: {
        type: String,
        // Commented out for convenience right now: required: [true, "Must have a summary."],
    },
    seller: {
        //tells it to look at Mongoose
        type: mongoose.Types.ObjectId,
        //tells which object it should look for
        ref: 'User'
    },
}, {timestamps: true})

const Product = mongoose.model('Product', bookSchema)

module.exports = Product;