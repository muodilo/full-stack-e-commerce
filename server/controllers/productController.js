const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');


const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, discountPrice, category, type, quantity,images } = req.body;
  
  if (!name || !description || !price || discountPrice || !category || !type || !quantity || !images) {
    res.status(404)
    throw new Error("Provide all fields");
  }

  try {
    const product = await Product.create({
      name,
      description,
      price,
      discountPrice,
      category,
      type,
      quantity,
      images,
    })
    res.status(200).json('Product is created successfully');
    
  } catch (error) {
    res.status(500)
    throw new Error(error.message);
  }
})

module.exports = {
  createProduct,
}