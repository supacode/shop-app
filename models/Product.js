const { Model, Schema } = require('mongoose');
const slugify = require('slugify');

const randomStr = require('../utils/randomStr');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product must have a name'],
    },
    price: {
      type: Number,
      required: [true, 'Product must have a price'],
    },
    stock: {
      type: String,
      default: 'in-stock',
      enum: ['in-stock', 'out-stock'],
    },
    images: [
      {
        id: Schema.Types.ObjectId,
        url: String,
        thumb: String,
      },
    ],
    coverImage: String,
    description: String,
    slug: String,
  },
  { timestamps: true },
);

productSchema.pre('save', function(next) {
  this.slug = `${slugify(this.name, { lower: true })}-${randomStr(5)}`;

  next();
});

const Product = Model('Product', productSchema);
module.exports = Product;
