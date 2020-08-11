const express = require('express');
const app = express();

const config = require('./config/config.js');
const { connectDatabase } = require('./config/database.js')

connectDatabase();

require('./config/express.js')(app);

app.listen(process.env.port, () => {
    console.log(`Rest api listening on port: ${config.port}`)
});