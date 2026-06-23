const express = require('express');

console.log('APP.JS LOADED');

const cors = require('cors');
const {
    notFound,
    errorHandler
} = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

const uploadRoutes = 
    require('./routes/uploadRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => (
    res.json({
        message: 'Kirshas Boutique API Running'
    })

));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


app.use(
    '/api/upload',
    uploadRoutes
);

app.use(notFound);
app.use(errorHandler);

module.exports = app;