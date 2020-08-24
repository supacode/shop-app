const { Router } = require('express');

const { createOrder } = require('../controllers/orderController');

const router = Router();

router.route('/').post(createOrder);

const orderRoutes = router;
module.exports = orderRoutes;
