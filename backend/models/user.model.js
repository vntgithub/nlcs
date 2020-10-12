const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userid: String,
	username: String,
	password: String,
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;