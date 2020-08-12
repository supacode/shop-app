const { Router } = require('express');

const { createAccount, getUser } = require('../controllers/authController');

const router = Router();

router.post('/register', createAccount);

router.route('/:id').get(getUser);

const userRoutes = router;

module.exports = userRoutes;
