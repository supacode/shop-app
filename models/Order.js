const { Model, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    products: {
      type: Array,
      ref: 'Product',
    },
  },
  { timestamps: true },
);

module.exports = Model('Order', orderSchema);
