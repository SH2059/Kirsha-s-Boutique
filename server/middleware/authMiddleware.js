const jwt = require('jsonwebtoken')
const user = require('../models/User')

const protect = async (req, res, next) => {
    try {

        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {

            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            req.user = await user.findById(decoded.userId)
                .select('-password -__V');

            next();

        } else {

            return res.status(401).json({
                message: 'Not authorized. No token provided'
            });
        }

    } catch (error) {
        
        return res.status(401).json({
            message: 'Not authorized. Invalid token'
        });

    }
};
const admin = (req, res, next) => {

    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({
            message: 'Access denied. Admin only.'
        });
    }
};


module.exports = {
    protect,
    admin
};