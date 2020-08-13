const { Router } = require('express');

const { getUser, getMe } = require('../controllers/userController');
const { protectRoutes } = require('../controllers/authController');

const router = Router();

router.route('/:id').get(getUser);

router.use(protectRoutes);
router.route('/').get(getMe);

const userRoutes = router;
module.exports = userRoutes;
