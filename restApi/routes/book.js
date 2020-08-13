const controllers = require('../controllers/')
const router = require('express').Router();

router.get('/', controllers.book.get);

router.post('/', controllers.book.post);

router.put('/:id', controllers.book.put);

router.delete('/:id', controllers.book.delete);

module.exports = router;