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
  .post(createAccount)
  .get(getAllUsers);

router.post('/login', login);

router.route('/:id').get(getUser);

const userRoutes = router;

module.exports = userRoutes;
