const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	name: String,
	descreption: String,
	topic: String,
	urlimg: String,
	price: Number
});

const Book = mongoose.model('Book', bookSchema, 'book');

module.exports = Book;