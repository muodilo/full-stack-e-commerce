const express = require('express');
const { addToCart,getCartDetails } = require('../controllers/cartController.js');
const protect = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', protect, addToCart);
router.get('/', protect,getCartDetails);

module.exports = router;