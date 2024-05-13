const express = require('express');
const { createProduct,updateProduct } = require('../controllers/productController.js');
const protect = require('../middleware/authMiddleware.js');
const checkAdmin  = require('../middleware/adminMiddleware.js');

const router = express.Router();

router.post('/', protect, checkAdmin, createProduct);
router.put('/:id',protect,checkAdmin,updateProduct)

module.exports = router;