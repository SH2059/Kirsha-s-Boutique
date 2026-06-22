const Product = require('../models/Product');

const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });
    }
};

const getProducts = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 12;

        const skip = (page - 1) * limit;

        let filter = {};

        //Search
        if (req.query.search) {

            filter.name = {
                $regex: req.query.search,
                $options: 'i'
            };
        }

        //Category
        if (req.query.category) {

            filter.category = req.query.category;

        }

        const totalProducts =
            await Product.countDocuments(filter);


        const products = await Product.find(filter)
            .skip(skip)
            .limit(limit);

        res.status(200).json({

            products,

            page,

            pages: Math.ceil(
                totalProducts / limit
            ),

            totalProducts
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });
    }
};

const getProductsById = async (req, res) => {

    try {

        const product = await Product.findById(
            req.params.id
        );
        
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json(product);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductsById
};