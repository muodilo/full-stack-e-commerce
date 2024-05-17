const express = require('express');
const { addToCart,getCartDetails,removeFromCart } = require('../controllers/cartController.js');
const protect = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/:id', protect, addToCart);
router.get('/', protect, getCartDetails);
router.delete('/remove', protect, removeFromCart);

module.exports = router;