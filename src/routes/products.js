import express from 'express'
import { createFakeProducts } from '../services/productService.js'

const router = express.Router()

router.get('/mockingproducts', (req, res) => {
    const products = createFakeProducts()
    res.json(products)
});

export default router
