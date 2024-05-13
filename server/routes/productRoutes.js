const express = require('express');
const { createPost } = require('../controllers/productController.js');
const { protect } = require('../middleware/authMiddleware.js');
const { checkAdmin } = require('../middleware/adminMiddleware.js');

const router = express.Router();

router.post('/', protect, checkAdmin, createPost);