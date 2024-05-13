const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');


const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, discountPrice, category, type, quantity,images } = req.body;
  
  if (!name || !description || !price || !discountPrice || !category || !type || !quantity || !images) {
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

const updateProduct = asyncHandler(async (req, res) => {
  const productId = req.params;
  const { name, description, price, discountPrice, category, type, quantity, images } = req.body;

  try {
    //check if product exists
    const product = await Product.findById({ productId });

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.discountPrice = discountPrice || product.discountPrice;
    product.category = category || product.category;
    product.type = type || product.type;
    product.quantity = quantity || product.quantity;
    product.images = images || product.images;

    product = await product.save();
        
  } catch (error) {
    res.status(404)
    throw new Error(error.message);
  }
})

module.exports = {
  createProduct,
}