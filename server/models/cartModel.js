const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required:true,
  },
  items: [{
    product: {
      type: Schema.Types.ObjectId,
      ref:'Product',
    },
    quantity: {
      type: Number,
      required:true
    }
  }]
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;