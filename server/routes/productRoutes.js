const express = require('express');
const { createProduct,updateProduct,deleteProduct,getAllProducts,getCurrentMenProducts,getAllMenProducts } = require('../controllers/productController.js');
const protect = require('../middleware/authMiddleware.js');
const checkAdmin  = require('../middleware/adminMiddleware.js');

const router = express.Router();

router.post('/', protect, checkAdmin, createProduct);
router.put('/:id', protect, checkAdmin, updateProduct);
router.delete('/:id', protect, checkAdmin, deleteProduct);
router.get('/', getAllProducts);
router.get('/currentMenProducts', getCurrentMenProducts);
router.get('/men', getAllMenProducts);

module.exports = router;