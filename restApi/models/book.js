const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        match: [/[A-Za-z0-9.,!?\s]+/g, 'Book name is not valid!'],
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
        minlength: 30,
        match: [/[A-Za-z0-9.,!?\s]+/g, 'Book description is not valid!']
    },
    imgUrl: {
        type: String
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        match: [/[A-Za-z0-9\s]+/g]
    },
    genre: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('Book', bookSchema);
//!!!!!!!
//
//add required igmUrl later!!!!!