const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const ProductAsset = sequelize.define('ProductAsset', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'product_assets',
});

module.exports = ProductAsset;
