const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true,
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Product',
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    }
  }]
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;