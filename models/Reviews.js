const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    content: {
        type: String,
        required: [true, "Please provide some content to the review"]
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const Review = mongoose.model('Review', reviewsSchema)

module.exports = Review