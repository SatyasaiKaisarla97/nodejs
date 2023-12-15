const shopController = require('../controllers/shop1')
const express = require("express");
const router = express.Router();


router.get("/", shopController.shopItem);


module.exports = router;