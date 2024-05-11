const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    
  },
  name: {
    type:String
  },
  address: {
    type:String,
  },
  phone: {
    type:String,
  },
  role: {
    type: String,
    enum:['user','admin']
  },
}, {
  timestamps:true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;