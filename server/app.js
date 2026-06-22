const express = require('express');
const cors = require('cors');
const {
    notFound,
    errorHandler
} = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => (
    res.json({
        message: 'Kirshas Boutique API Running'
    })

));

app.use(notFound);
app.use(errorHandler);

module.exports = app;