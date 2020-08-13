const models = require('../models/');

module.exports = {
    get: (req, res, err) => {
        models.Book.find().lean()
        .then((books) => res.send(books))
        .catch(err => {
            res.status(401).send({ error : err.message });
        })
    },
    post: (req, res, err) => {
        const {
            title,
            description,
            imgUrl,
            author,
            genre
        } = req.body;

        models.Book.create({title, description, imgUrl, author, genre})
        .then(res.send(201).send("Book created. Thank you :)"))
        .catch(err => {
            res.status(401).send({ error : err.message });
        });
    },
    put: (req, res, err) => {
        const id = req.params.id;

        const {
            title,
            description,
            imgUrl,
            author,
            genre
        } = req.body;

        models.Book.updateOne({_id: id}, {title,description,imgUrl,author,genre})
            .then(() => {
                res.status(200).send("Book edited. Thank you!")
            })
            .catch(err => res.status(400).send(err));
    },
    delete: (req, res, err) => {
        const id = req.params.id;

        models.Book.deleteOne({ _id : id })
        .then((deletedBook) => res.send(deletedBook))
        .catch((err) => res.send(err))
    }
};