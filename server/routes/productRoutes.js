const express = require('express');

const {
    createProduct,
    getProducts,
    getProductsById
} = require('../controllers/productController');

const {
    protect,
    admin
} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, admin, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsById);

router.post(
    '/',
    protect,
    admin,
    createProduct
);

module.exports = router;