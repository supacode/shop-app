const createOrder = (req, res, next) => {
  res.status(200).json({
    message: 'Working on route',
  });
};

module.exports = {
  createOrder,
};
