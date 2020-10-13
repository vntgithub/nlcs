const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');



router.get('/getAllBook', bookController.getAllBook);
router.post('/addBook', bookController.addBook);
router.patch('/update', bookController.update)
module.exports = router;
