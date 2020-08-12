const { Router } = require('express');
const { createAccount } = require('../controllers/authController');

const router = Router();

router.post('/register', createAccount);

const authRoutes = router;

module.exports = authRoutes;
