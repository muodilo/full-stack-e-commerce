const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');


const addToCart = asyncHandler(async (req, res) => {
  const { productId} = req.body;
  const userId = req.user._id; // Assuming you have user information in req.user
  
  try {
    // Find the user's cart
    let cart = await Cart.findOne({ user: userId });
    
    // If the user doesn't have a cart, create a new one
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    
    // Check if the product is already in the cart
    const index = cart.items.findIndex(item => item.product.toString() === productId);
    
    if (index !== -1) {
      
      // If the product is already in the cart, update the quantity
      cart.items[index].quantity += 1;
    } else {
      // If the product is not in the cart, add it
      cart.items.push({ product: productId, quantity:1 });
    }
    
    // Save the updated cart
    await cart.save();
    
    res.status(200).json('Product added to cart successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const getCartDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you have user information in req.user
  
  try {
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    // Extract details from the cart
    const cartDetails = {
      user: cart.user,
      items: cart.items.map(item => ({
        product: {
          _id: item.product._id,
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
          discountPrice: item.product.discountPrice,
          category: item.product.category,
          type: item.product.type,
          quantityAvailable: item.product.quantity,
          images: item.product.images,
        },
        quantity: item.quantity
      }))
    };

    res.status(200).json({ cart: cartDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = {
  addToCart,
  getCartDetails,
  
}