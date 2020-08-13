const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema ({
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000,
        match: [/[A-Za-z0-9.,!?\s]+/g, "The content is invalid."]
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        match: [/[A-Za-z0-9\s]+/g]
    },
    fromBook: {
        required: true,
        type: 'ObjectId',
        ref: 'Book'
    }
});

module.exports = new mongoose.model("Quote" ,quoteSchema )