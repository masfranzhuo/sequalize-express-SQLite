var express = require('express');
var Book = require('../models').Book;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Book.findAll().then(book => {
        res.status(200).json(book);
    });
});

router.get('/:id', function(req, res){
    console.log('get book by id');
    Book.findById(req.params.id).then(book => {
        console.log(book);
        res.status(200).json(book);
    });
});

router.post('/', function(req, res){
    Book.create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    }).then(book => {
        console.log(book.get({
            plain: true
        }))
        res.status(200).json(book);
    });
});

router.put('/:id', function(req, res){
    console.log('update book by id');
    Book.update({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    },{
        where: { id: req.params.id }
    }).then(book => {
        res.status(200).json(book);
    })
});

router.delete('/:id', function(req, res){
    console.log('delete book by id');
    Book.destroy({
        where: { id: req.params.id }
    }).then(book => {
        res.status(200).json(book);
    });
})

module.exports = router;