const Product = require('../data/product');

const fileFullPath = (req, image) => {
  const { PORT } = process.env;
  return `${req.protocol}://${req.hostname}:${PORT}/images/products/${image}`;
};

const transformProduct = (req, product) => {
  return {
    ...product,
    coverImage: fileFullPath(req, product.coverImage),
    images: product.images.map(image => fileFullPath(req, image)),
  };
};

const getProducts = (req, res, next) => {
  const products = Product.map(product => transformProduct(req, product));

  setTimeout(() => {
    res.status(200).json({
      status: 'success',
      count: products.length,
      products,
    });
  }, 2000);
};

const getProduct = (req, res, next) => {
  const { slug } = req.params;

  const product = transformProduct(
    req,
    Product.find(prod => prod.slug === slug),
  );

  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found',
    });
  }

  setTimeout(() => {
    res.status(200).json({ status: 'success', product });
  }, 2000);
};

module.exports = {
  getProducts,
  getProduct,
};
