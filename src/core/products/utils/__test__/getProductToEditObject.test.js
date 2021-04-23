import {getProductToEditObject} from '../getProductToEditObject';

describe('getProductToEditObject', () => {
    it('should return a Product object to edit having received the id, name, quantity, price and isBought fields', () => {
         // Arrange
         const idProduct = 1;
         const nameProduct = 'Leche';
         const quantityProduct = '7';
         const priceProduct = '2.75€';
         const isBoughtProduct = true;
 
         const productExpected = {
            id: idProduct,
            name: nameProduct,
            quantity: quantityProduct,
            price: priceProduct,
            isBought: isBoughtProduct
         }
 
         // Act
         const objectProduct = getProductToEditObject(idProduct, nameProduct, quantityProduct, priceProduct, isBoughtProduct);
 
         // Assert
         expect(objectProduct).toEqual(productExpected);
    })
})