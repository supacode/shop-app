const User = require('../models/User');

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

const getMe = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    user: req.user,
  });
};

module.exports = {
  getUser,
  getAllUsers,
  getMe,
};
