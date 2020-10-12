const express = require('express');
const router = express.Router();

let Book = require('../models/book.model');

router.get('/', (req, res) => {
	Book.find()
		.then(book => res.json(book))
		.catch(err => res.status(400).json('ErrL ' + err));
})
module.exports = router;
