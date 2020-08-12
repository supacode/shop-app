const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config({
  path: './config.env',
});

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;
