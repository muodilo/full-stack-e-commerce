const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//create a user

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    res.status(403);
    throw new Error('Please provide all fields');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //check if user already exists

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(403);
      throw new Error('user already exists');
    }

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role:'user',
    })

    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    })
  } catch (error) {
    res.status(400)
    throw new Error(error.message);
  }
})

//login

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401)
    throw new Error("pLease provide both email and password");
  }

  try {
    //check if user with provided email exists

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401)
      throw new Error("Invalid emil")
    }

    //check if provided password matches the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      res.status(401)
      throw new Error("Invalid password");
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500)
    throw new Error(error.message);
  }
})




//generate token function
const generateToken = (id) => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  )
  return token
}

module.exports = {
  createUser,
  loginUser
}