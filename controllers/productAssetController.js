const ProductAsset = require('../models/productAssetModel');
const Product = require('../models/productModel');

exports.getAllProductAssets = async (req, res) => {
  try {
    const productAssets = await ProductAsset.findAll({
      include: {
        model: Product,
        attributes: ['name', 'slug', 'price', 'category_id'],
      },
    });

    res.status(200).json({
      success: true,
      message: 'Successful Get All Product Assets',
      data: productAssets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.getProductAsset = async (req, res) => {
  try {
    const {productAssetId} = req.params;

    const productAsset = await ProductAsset.findByPk(productAssetId);

    if (!productAsset) {
      return res.status(404).json({
        success: false,
        message: 'Product Asset Not Found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successful Get Product Asset',
      data: productAsset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.postAddProductAsset = async (req, res) => {
  try {
    const {product_id} = req.body;

    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product Not Found!',
      });
    }

    const images = req.files.map((file) => ({
      image: file.filename,
    }));

    const productAssets = await ProductAsset.bulkCreate(
        images.map((img) => ({
          image: img.image,
          product_id: product_id,
        })),
    );

    return res.status(201).json({
      success: true,
      message: 'Successful Create Image Assets',
      data: {
        product_id: product_id,
        productAssets: productAssets,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};


exports.patchEditProductAsset = async (req, res) => {
  try {
    const {productAssetId} = req.params;
    const {product_id} = req.body;

    const productAsset = await ProductAsset.findByPk(productAssetId);
    if (!productAsset) {
      return res.status(404).json({
        success: false,
        message: 'Product Asset Not Found!',
      });
    }

    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product Not Found!',
      });
    }

    await productAsset.update({
      product_id,
    }, {
      where: {
        id: productAssetId,
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Product Asset updated successfully',
      data: productAsset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};


exports.deleteProductAsset = async (req, res) => {
  try {
    const {productAssetId} = req.params;

    const productAsset = await ProductAsset.findByPk(productAssetId);
    if (!productAsset) {
      return res.status(404).json({
        success: false,
        message: 'Product Asset Not Found!',
      });
    }

    await productAsset.destroy();

    return res.status(200).json({
      success: true,
      message: 'Product Asset deleted successfully',
      data: productAsset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
