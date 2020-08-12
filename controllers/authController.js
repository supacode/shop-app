const User = require('../models/User');

const createAccount = async (req, res, next) => {
  // const { email, password, passwordConfirm } = req.body;

  // const user = await User.create({ email, password, passwordConfirm });

  // console.log(user);

  res.status(201).json({
    status: 'success',
    message: 'Working on route',
  });
};

module.exports = {
  createAccount,
};
