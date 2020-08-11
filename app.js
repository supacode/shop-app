const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config({
  path: './config.env',
});

const productRoutes = require('./routes/productRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/products', productRoutes);

module.exports = app;
