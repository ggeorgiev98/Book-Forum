const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const userSchema = new Schema ({ 
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 16,
        match: [/^[a-zа-я0-9_-]+$/i, "Username is not correct!"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16
    },
    books: [{type: ObjectId, ref: "Book"}],
    quotes: [{type: ObjectId, ref: "Quote"}],
    favouriteBooks: [{type: ObjectId, ref: "Book"}],
    reviews: [{type: ObjectId, ref: "Comment"}],
});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model("User", userSchema);