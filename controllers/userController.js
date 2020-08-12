const User = require('../models/User');

const createAccount = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const user = await User.create({ email, password, passwordConfirm });

  res.status(201).json({
    status: 'success',
    user,
  });
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
  res.status(200).json({
    status: 'success',
    user,
  });
};

module.exports = {
  createAccount,
  getUser,
  getAllUsers,
  login,
};
