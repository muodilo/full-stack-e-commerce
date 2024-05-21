const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');


const addToCart = asyncHandler(async (req, res) => {
  const productId  = req.params.id;
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
      cart.items.push({ product: productId, quantity: 1 });
    }
    
    // Save the updated cart
    await cart.save();
    
    // Get the number of unique items in the cart
    const uniqueItems = new Set(cart.items.map(item => item.product.toString()));
    const numberOfUniqueItems = uniqueItems.size;
    
    res.status(200).json({ message: 'Product added to cart successfully', numberOfUniqueItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const removeFromCart = asyncHandler(async (req, res) => {
  const productId  = req.params.id;
  const userId = req.user._id; // Assuming you have user information in req.user
  
  try {
    // Find the user's cart
    let cart = await Cart.findOne({ user: userId });
    
    // If the user doesn't have a cart, return an error
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }
    
    // Find the index of the item to remove
    const index = cart.items.findIndex(item => item.product.toString() === productId);
    
    // If the item is not found in the cart, return an error
    if (index === -1) {
      res.status(404).json({ message: 'Item not found in cart' });
      return;
    }
    
    // Decrease the quantity of the item by 1
    cart.items[index].quantity -= 1;
    
    // If the quantity reaches 0, remove the item from the cart
    if (cart.items[index].quantity <= 0) {
      cart.items.splice(index, 1);
    }
    
    // Save the updated cart
    await cart.save();
    
    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





const getCartDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you have user information in req.user
  
  try {
    // Find the user's cart and populate product details
    const cart = await Cart.findOne({ user: userId }).populate({
      path: 'items.product',
      select: 'name description price discountPrice category type quantity images',
    });
    
    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const numberOfItems = cart.items.length;

    res.status(200).json({ cart, numberOfItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = {
  addToCart,
  getCartDetails,
  removeFromCart,

}