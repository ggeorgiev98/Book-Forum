const mongoose = require('mongoose');
const config = require('./config.js');

const connectDatabase = () => {
    mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {

        if(err) {
            console.error(`Error: ${err}`);
        } else {
            console.log("Database connected!");
        };
    });
};

module.exports = {
    connectDatabase
};