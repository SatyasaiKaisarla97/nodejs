const path = require('path')
const rootDir = require('../util/path')
const Product = require('../models/product')

exports.addProduct =  (req, res, next) => {
    res.sendFile(path.join(rootDir, '.', 'views', 'add-product.html'));
  }

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
  }

