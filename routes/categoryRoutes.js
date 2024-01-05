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
router.get('/:categoryId', getCategory);
router.post('/add', postAddCategory);
router.patch('/:categoryId/edit', patchEditCategory);
router.delete('/:categoryId/delete', deleteCategory);

module.exports = router;
