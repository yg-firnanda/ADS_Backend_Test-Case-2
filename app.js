const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const association = require('./models/association');

const app = express();

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
const productAssetRoutes = require('./routes/productAssetRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/products', productRoutes);
app.use('/product-assets', productAssetRoutes);
app.use('/categories', categoryRoutes);

association();

app.listen(3000);
