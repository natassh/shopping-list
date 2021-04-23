import {getTotalCost} from '../getTotalCost';

describe('getTotalCost', () => {
    it('should return the total cost of the products' , () => {
        // Arrange
        const product1 = {
            id: 1,
            name: 'Leche',
            quantity: '3',
            price: '2',
            isBought: false,
        }
        const product2 = {
            id: 2,
            name: 'Naranjas',
            quantity: '1',
            price: '5',
            isBought: false,
        }
        const products = [product1, product2];

        // Act
        const totalCost = getTotalCost(products);

        // Assert
        expect(totalCost).toEqual(7)
    })
})
