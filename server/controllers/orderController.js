const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const Order = require('../models/orderModel');

const createOrder = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you have user information in req.user
  const { shippingAddress, phoneNumber, paymentMethod } = req.body;

  try {
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId }).populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Your cart is empty' });
    }

    // Calculate total amount
    let totalAmount = 0;
    for (const item of cart.items) {
      totalAmount += item.product.discountPrice * item.quantity;
    }

    // Create the order
    const order = new Order({
      user: userId,
      items: cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.discountPrice
      })),
      totalAmount,
      shippingAddress,
      phoneNumber,
      paymentMethod,
      paymentStatus: 'pending' // Set payment status to 'pending'
    });

    // Save the order
    await order.save();

    // Clear the user's cart
    await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });

    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getUserOrders = asyncHandler(async (req, res) => {
  const userId = req.user._id; 

  try {
    const orders = await Order.find({ user: userId })
      .populate('user', 'name email')
      .populate({
        path: 'items.product',
        select: 'name' 
      });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getUserOrders
};

module.exports = {
  createOrder,
  getUserOrders
};
