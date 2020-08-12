const { Router } = require('express');
const { createAccount } = require('../controllers/authController');

const router = Router();

router.post('/register', createAccount);

const userRoutes = router;

module.exports = userRoutes;
