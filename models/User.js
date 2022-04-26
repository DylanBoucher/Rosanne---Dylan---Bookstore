const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username cannot be empty"],
    },
    image: {
        type: String,
        required: [true, "Must have image."],
    },
    booksSold: {
        type: Number,
        min: [0, 'You cannot have a negative price.'],
        required: [true, "Price cannot be empty."]
    },
    location: {
        type: String,
        required: [true, "Author cannot be empty."],
    },
    review: {
        type: String,
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;