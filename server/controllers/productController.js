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
  const productId = req.params.id;
  const { name, description, price, discountPrice, category, type, quantity, images } = req.body;

  try {
    //check if product exists
    let product = await Product.findById(productId);

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
    
    res.status(200).json({mesage:'Product Updated successfully',product});

  } catch (error) {
    res.status(404)
    throw new Error(error.message);
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  try {
    //check if product exists
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404)
      throw new Error('product does not exist');
    }

    await product.deleteOne();

    res.status(200).json('Product is deleted successfully');
  } catch (error) {
    res.status(500)
    throw new Error(error.message);
  }
})

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    throw new Error(error.message);
  }
})

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
}