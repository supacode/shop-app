const createAccount = (req, res, next) => {
  res.status(201).json({
    status: 'success',
    message: 'Working on route',
  });
};

module.exports = {
  createAccount,
};
