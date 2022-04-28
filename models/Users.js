const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email Address cannot be empty."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty."]
    },    
    avatar: {
        type: String,
        required: [true, "Must have user image."],
    },
    booksSold: {
        type: Number,
        min: [0, 'You cannot have negative sales.'],
        required: [true, "Books sold cannot be empty."]
    },
    location: {
        type: String,
    },
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;