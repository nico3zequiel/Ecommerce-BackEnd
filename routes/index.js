const express = require('express');
const productsRoutes = require('./products/products.routes');
const cartRoutes = require('./cart/cart.routes');

const router = express.Router();

// Middlewares
router.use(express.json()); 
router.use(express.urlencoded({extended: true}))  

// Routes
router.use('/', productsRoutes);
router.use('/', cartRoutes);


module.exports = router;