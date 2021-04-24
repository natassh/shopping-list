import {Product} from '../../../ui/Store/modules/product/types/product';

const getProductObject = (name: string, quantity: string): Product => {
 const productObject = {
    id: new Date().getTime(),
    name: name,
    quantity: quantity,
    price: "0",
    isBought: false
 }
 return productObject;
}

export {getProductObject};