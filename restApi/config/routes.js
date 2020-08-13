const router = require('../routes/index.js');

module.exports = (app) => {

    app.use('/api/book', router.book);

    app.use('/api/user', router.user);

    app.use('*', (req, res, next) => res.send('<h1> Wrong path man! </h1>'))
};