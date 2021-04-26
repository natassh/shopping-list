import {getTotalCost} from '../getTotalCost';
import {products} from '../../fixtures/productsData'

describe('getTotalCost', () => {
    it('should return the total cost of the products' , () => {
        // Act
        const totalCost = getTotalCost(products);

        // Assert
        expect(totalCost).toEqual(7)
    })
    it('should return zero if there are no products' , () => {
        // Arrange
        const products = [];

        // Act
        const totalCost = getTotalCost(products);

        // Assert
        expect(totalCost).toEqual(0)
    })
})
