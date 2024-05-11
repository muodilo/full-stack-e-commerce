const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    if (conn) {
      console.log(`Database is connectes: ${conn.connection.host}`.cyan.underline)
    }
  } catch (error) {
    console.log(error.message.red.underline)
  }
}

module.exports = connectDb;