import {Product} from '../../../ui/Store/modules/product/types/product';

const saveProductsInLocalStorage = (products:Product[]): void => {
   localStorage.setItem('productlist', JSON.stringify(products));
}

export {saveProductsInLocalStorage};