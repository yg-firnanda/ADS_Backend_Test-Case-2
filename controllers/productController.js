const {default: slugify} = require('slugify');
const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    return res.status(200).json({
      success: true,
      message: 'Successful Get All Products',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const {productSlug} = req.params;

    const product = await Product.findOne({
      where: {slug: productSlug},
    });

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product Not Found!',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successful Get Product',
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.postAddProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      category_id,
    } = req.body;
    const slug = slugify(name, {
      lower: true,
    });

    const existingProductName = await Product.findOne({
      where: {name},
    });

    if (existingProductName) {
      return res.status(400).json({
        success: false,
        message: 'Product Name Already Exist!',
      });
    }

    Product.create({
      name,
      slug,
      price,
      category_id,
    });

    return res.status(201).json({
      success: true,
      message: 'Successful Add New Product',
      data: {
        name,
        slug,
        price,
        category_id,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.patchEditProduct = async (req, res) => {
  try {
    const {productSlug} = req.params;

    const product = await Product.findOne({
      slug: productSlug,
    });

    if (!product) {
      return res.status(200).json({
        success: false,
        message: 'Product Not Found!',
      });
    }

    const {
      name,
      price,
      category_id,
    } = req.body;
    const slug = slugify(name, {
      lower: true,
    });

    const existingProductName = await Product.findOne({
      where: {name},
    });

    if (existingProductName) {
      return res.status(400).json({
        success: false,
        message: 'Product Name Already Exist!',
      });
    }

    Product.update({
      name,
      slug,
      price,
      category_id,
    }, {
      where: {slug: productSlug},
    });

    return res.status(200).json({
      success: true,
      message: 'Successful Update Product',
      data: {
        name,
        slug,
        price,
        category_id,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const {productSlug} = req.params;

    const product = await Product.findOne({
      where: {slug: productSlug},
    });

    if (!product) {
      return res.status(200).json({
        success: false,
        message: 'Product Not Found!',
      });
    }

    await Product.destroy({
      where: {slug: productSlug},
    });

    return res.status(200).json({
      success: true,
      message: 'Successful Delete Product',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};
