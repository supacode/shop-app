const Product = require('../data/product');

const fileFullPath = (req, image) => {
  const { PORT } = process.env;
  return `${req.protocol}://${req.hostname}:${PORT}/images/products/${image}`;
};

const getProducts = (req, res, next) => {
  const products = Product.map(product => {
    return {
      ...product,
      images: Product.map(prod => {
        return prod.images.map(image => fileFullPath(req, image));
      }),
      coverImage: fileFullPath(req, product.coverImage),
    };
  });

  setTimeout(() => {
    res.status(200).json({
      status: 'success',
      products,
    });
  }, 2000);
};

const getProduct = (req, res, next) => {
  const { slug } = req.params;

  const product = Product.find(prod => prod.slug === slug);

  const prod = {
    ...product,
    coverImage: fileFullPath(req, product.coverImage),
    images: product.images.map(image => fileFullPath(req, image)),
  };

  if (!prod) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found',
    });
  }

  setTimeout(() => {
    res.status(200).json({ status: 'success', product: prod });
  }, 2000);
};

module.exports = {
  getProducts,
  getProduct,
};
