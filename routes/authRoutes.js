const { Router } = require('express');

const { createAccount, login } = require('../controllers/authController');

const router = Router();

router.post('/login', login);

router.post('/register', createAccount);

const authRoutes = router;
module.exports = authRoutes;
