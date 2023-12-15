const path = require('path');

const express = require('express');

const addProductController = require('../controllers/product')

const router = express.Router();

router.get('/add-product',addProductController.addProduct);

router.post('/add-product', addProductController.postProduct);

module.exports = router;


