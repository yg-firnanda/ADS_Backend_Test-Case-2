const {Router} = require('express');

const router = Router();

const {
  getAllCategories,
  getCategory,
  postAddCategory,
  patchEditCategory,
  deleteCategory,
} = require('../controllers/categoryController');

router.get('/', getAllCategories);
router.get('/:categorySlug', getCategory);
router.post('/add', postAddCategory);
router.patch('/:categorySlug/edit', patchEditCategory);
router.delete('/:categorySlug/delete', deleteCategory);

module.exports = router;
