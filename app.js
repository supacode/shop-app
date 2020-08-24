const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config({
  path: path.resolve('./config.env'),
});

const app = express();

const databaseConnection = require('./utils/databaseConnection');

// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

(async () => await databaseConnection())();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/order', orderRoutes);

module.exports = app;
