const {default: slugify} = require('slugify');
const Category = require('../models/categoryModel');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json({
      success: true,
      message: 'Successful Get All Categories',
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const {categorySlug} = req.params;

    const category = await Category.findOne({
      where: {slug: categorySlug},
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category Not Found!',
        data: category,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successful Get Category',
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.postAddCategory = async (req, res) => {
  try {
    const {name} = req.body;
    const slug = slugify(name, {
      lower: true,
    });

    const existingCategoryName = await Category.findOne({
      where: {name},
    });

    if (existingCategoryName) {
      return res.status(400).json({
        success: false,
        message: 'Category Name Already Exist',
      });
    }

    const category = await Category.create({
      name,
      slug,
    });

    return res.status(200).json({
      success: true,
      message: 'Successful Add Category',
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.patchEditCategory = async (req, res) => {
  try {
    const {categorySlug} = req.params;

    const category = await Category.findOne({
      where: {slug: categorySlug},
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category Not Found!',
      });
    }

    const {name} = req.body;
    const slug = slugify(name, {
      lower: true,
    });

    const existingCategoryName = await Category.findOne({
      where: {name},
    });

    if (existingCategoryName) {
      return res.status(404).json({
        success: false,
        message: 'Category Name Already Exist',
      });
    }

    await Category.update({
      name,
      slug,
    }, {
      where: {slug: categorySlug},
    });

    return res.status(200).json({
      success: true,
      message: 'Successful Update Category',
      data: {
        name,
        slug,
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

exports.deleteCategory = async (req, res) => {
  try {
    const {categorySlug} = req.params;

    const category = await Category.findOne({
      where: {slug: categorySlug},
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category Not Found!',
      });
    }

    await Category.destroy({
      where: {slug: categorySlug},
    });

    return res.status(200).json({
      success: true,
      message: 'Successful Delete Category',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};
