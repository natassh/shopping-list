import {getProductObject} from '../getProductObject';

describe('getProductObject', () => {
    it('should return a Product object having received the name and quantity', () => {
        // Arrange
        const nameProduct = 'Leche';
        const quantityProduct = '7';

        const productExpected = {
            id: new Date().getTime(),
            name: "Leche",
            quantity: "7",
            price: "0",
            isBought: false
        }

        // Act
        const objectProduct = getProductObject(nameProduct, quantityProduct);

        // Assert
        expect(objectProduct).toEqual(productExpected);
    })
})