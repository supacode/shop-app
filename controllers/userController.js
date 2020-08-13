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

const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.status(200).json({
    status: 'success',
    user,
  });
};

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    status: 'success',
    count: users.length,
    users,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password, user.password))) {
    // TODOO: Send proper validation messages
    return res.status(401).json({});
  }

  sendToken({ res, user, statusCode: 200 });
};

module.exports = {
  createAccount,
  getUser,
  getAllUsers,
  login,
};
