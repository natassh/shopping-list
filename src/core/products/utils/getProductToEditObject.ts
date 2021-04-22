import {Product} from '../../../ui/Store/modules/product/types/product';

const getProductToEditObject = (id: number, name: string, quantity: string, price: string, isBought: boolean): Product => {
 const productObject = {
    id: id,
    name: name,
    quantity: quantity,
    price: price,
    isBought: isBought
 }
 return productObject;
}

export {getProductToEditObject};

