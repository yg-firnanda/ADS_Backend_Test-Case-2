const {Router} = require('express');

const router = Router();

const {
  getAllProducts,
  getProduct,
  postAddProduct,
  patchEditProduct,
  deleteProduct,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:productSlug', getProduct);
router.post('/add', postAddProduct);
router.patch('/:productSlug/edit', patchEditProduct);
router.delete('/:productSlug/delete', deleteProduct);

module.exports = router;
