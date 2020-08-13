const jwt = require('jsonwebtoken');

const User = require('../models/User');

const sendToken = (options = { res: null, user: null, statusCode: null }) => {
  const { res, user, statusCode } = options;

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: `${process.env.JWT_EXPIRY_DAYS} days`,
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};

const createAccount = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const user = await User.create({ email, password, passwordConfirm });

  sendToken({ res, user, statusCode: 201 });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password, user.password))) {
    // TODO: Send proper validation messages
    return res.status(401).json({});
  }

  sendToken({ res, user, statusCode: 200 });
};

module.exports = {
  login,
  createAccount,
};
