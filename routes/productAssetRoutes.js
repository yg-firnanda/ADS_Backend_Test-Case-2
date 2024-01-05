const {Router} = require('express');
const multer = require('multer');
const router = Router();
const path = require('path');

const storage = multer.diskStorage({
  destination: './storage/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({storage});

const {
  getAllProductAssets,
  getProductAsset,
  postAddProductAsset,
  patchEditProductAsset,
  deleteProductAsset,
} = require('../controllers/productAssetController');

router.get('/', getAllProductAssets);
router.get('/:productAssetId', getProductAsset);
router.post('/add', upload.array('image'), postAddProductAsset);
router.patch('/:productAssetId/edit', patchEditProductAsset);
router.delete('/:productAssetId/delete', deleteProductAsset);

module.exports = router;
