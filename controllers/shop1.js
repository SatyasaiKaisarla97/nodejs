const path = require('path')
const rootDir = require('../util/path')
const Product = require('../models/product')

exports.shopItem = (req, res, next) => {
    const products = Product.fetchAll(products => {
      console.log(products)
    })
    res.sendFile(path.join(rootDir,'.','views', 'shop.html'))
  }