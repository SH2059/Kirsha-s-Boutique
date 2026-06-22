const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    size: {
        type: String
    },

    color: {
        type: String
    },

    stock: {
        type: Number,
        default:0
    }
});

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        brand: {
            type: String,
            default: "Kirsha's Boutique"
        },

        price: {
            type: Number,
            required: true
        },

        salePrice: {
            type: Number,
            default: 0
        },

        images: [
            {
                type: String
            }
        ],

        variant: [variantSchema],

        isFeatured: {
            type: Boolean,
            default: false
        },

        status: {
            type: String,
            enum: ['active', 'draft', 'out-of-stock'],
            default: 'active'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);