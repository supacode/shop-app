const User = require('../models/User');

const createAccount = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const user = await User.create({ email, password, passwordConfirm });

  res.status(201).json({
    status: 'success',
    user,
  });
};

module.exports = {
  createAccount,
};
