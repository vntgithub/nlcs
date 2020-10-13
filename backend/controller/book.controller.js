const Book = require('../models/book.model');
const { syncIndexes } = require('../models/book.model');

module.exports = {
    getAllBook: async(req, res) =>{
        Book.find()
		.then(book => res.json(book))
		.catch(err => res.status(400).json('ErrL ' + err));
    },
    addBook: async(req, res) => {
        const newBook = await Book.create(req.body);
        res.json();
    },
    update: async(req, res) => {

    }
    delelte: async(req, res) => {

    },
    findByName: async(req, res) => {

    }
    findByToppic: async(req, res) => {
        
    }
}