const express = require('express');
const contactController = require('../controllers/contact')

const router = express.Router();

router.get('/contactus', contactController.contacUs);

router.post('/contactus', contactController.success);

module.exports = router;