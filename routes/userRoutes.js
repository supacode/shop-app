const { Router } = require('express');

const {
  createAccount,
  getUser,
  getAllUsers,
  login,
} = require('../controllers/userController');

const router = Router();

router
  .route('/')
  .post(login)
  .get(getAllUsers);

router.post('/register', createAccount);

router.route('/:id').get(getUser);

const userRoutes = router;

module.exports = userRoutes;
