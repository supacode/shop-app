const { Router } = require('express');

const { getUser, getMe } = require('../controllers/userController');

const router = Router();

router.route('/:id').get(getUser);

// TODO:  Protect routes
router.route('/').get(getMe);

const userRoutes = router;
module.exports = userRoutes;
