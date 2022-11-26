import path from 'path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import {listProductsByCategory} from './app/useCases/categories/listProductsByCategory'
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();


// Configuração do multer
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});



// List Categories

router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategory);

// List Product

router.get('/products', listProducts);

// Create product

router.post('/products', upload.single('imagePath'), createProduct);

// Get Product by category

router.get('/categories/:categoryId/products', listProductsByCategory);

//List Orders

router.get('/orders', listOrders);

//Create Order

router.post('/orders', createOrder);

//Change Order Status

router.patch('/orders/:orderId', changeOrderStatus);

// Delete / Cancel Order

router.delete('/orders/:orderId', cancelOrder);
