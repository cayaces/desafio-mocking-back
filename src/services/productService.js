import { faker } from '@faker-js/faker';
import { errorDictionary } from './dictionaryError.js';

faker.location = 'es';

export const createFakeProducts = () => {

    try {
        const products = []

        for (let i = 0; i < 100; i++) {

            const product = {
                _id: faker.string.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: faker.commerce.department(),
                stock: faker.finance.amount({ min: 1000, max: 10000, dec: 2, symbol: '$' }),
            }
            products.push(product)
        }
        return products

    } catch (error) {

        throw errorDictionary.PRODUCT_CREATION.INTERNAL_SERVER_ERROR
    }

}
