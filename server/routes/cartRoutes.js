const express = require('express');
const { addToCart } = require('../controllers/cartController.js');
const protect = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', protect, addToCart);

module.exports = router;