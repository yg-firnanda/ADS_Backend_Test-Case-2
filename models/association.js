const Product = require('./productModel');
const ProductAsset = require('./productAssetModel');
const Category = require('./categoryModel');

const associateModels = () => {
  // Product
  Product.hasMany(ProductAsset, {foreignKey: 'product_id'});
  Product.belongsTo(Category, {foreignKey: 'category_id'});

  // Product Asset
  ProductAsset.belongsTo(Product, {foreignKey: 'product_id'});

  // Category
  Category.hasMany(Product, {foreignKey: 'category_id'});
};

module.exports = associateModels;
