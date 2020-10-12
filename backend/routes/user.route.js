const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Err: ' + err));
})

module.exports = router;