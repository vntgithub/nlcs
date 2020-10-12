const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	id: String,
	name: String,
	descreption: String,
	topic: String,
	price: String
});

const Book = mongoose.model('Book', bookSchema, 'book');

module.exports = Book;