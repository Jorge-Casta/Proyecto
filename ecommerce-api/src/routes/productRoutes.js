import express from 'express';
import {
  getProducts,
  getProductById,
  getProductByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/product', getProducts);
router.get('/product/:id', getProdcutById);
router.post('/product', createProdcut);
router.put('/product/:id', updateProduct);
router.get('/product/:id', deletePrpduct);

export default router;