const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDb = require('./config/db.js');
const { errorHandler } = require('./middleware/errorHandlerMiddleware.js');

connectDb();

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.listen(port, console.log(`server is running on port ${port}`));