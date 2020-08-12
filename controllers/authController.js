const createAccount = (req, res, next) => {
  console.log(req.body);

  next();
};

module.exports = {
  createAccount,
};
