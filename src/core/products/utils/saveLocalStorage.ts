import {Product} from '../../../ui/Store/modules/product/types/product';

const saveLocalStorage = (products:Product[]): void => {
   localStorage.setItem('productlist', JSON.stringify(products));
}

export {saveLocalStorage};