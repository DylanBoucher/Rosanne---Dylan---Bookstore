const mongoose = require('mongoose');
const { db } = require('./Books');

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





// db.Users.insertMany{
// [
//     {
//     username: 'Pickwick',
//     email: 'pickwick@something.com',
//     password: 'pick',
//     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&usqp=CAU',
//     booksSold: 10,
//     location: 'Washington, DC',
//     },
//     {
//     username: 'Buffy',
//     email: 'buffy@something.com',
//     password: 'buff',
//     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksfgj5J5E-ggYSK_8yT3DVznaJlrVm3pt5A&usqp=CAU',
//     booksSold: 1,
//     location: 'Sunnydale, CA',
//     },
//     {
//     username: 'DrWhy',
//     email: 'drwhy@something.com',
//     password: 'pass',
//     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU',
//     booksSold: 0,
//     location: 'Cardiff, UK',
//     }
// ]
// }