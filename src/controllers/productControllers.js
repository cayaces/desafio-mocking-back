import { createFakeProducts } from '../services/productService.js'
import { handleError } from '../services/errorHandler.js'

export const getMockingProducts = (req, res) => {

    try {
        const products = createFakeProducts()
        res.json(products)

    } catch (error) {
        handleError(res, 500, 'INTERNAL_SERVER_ERROR')
    }


}
