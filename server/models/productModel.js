const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number
  }, // New field for discounted price
  category: {
    type: String
  },
  type: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  },
  images: [{
    type: String,
  }],
  rating: {
    type: Number,
    default: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps:true
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;