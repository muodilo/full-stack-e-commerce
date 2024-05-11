const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDb = require('./config/db.js');

connectDb();

const app = express();
app.use(cors());
const port = process.env.PORT;

app.listen(port, console.log(`server is running on port ${port}`));