import {Product} from '../../../ui/Store/modules/product/types/product';

const getInitialState = (): Product[] => {
   const productList: Product[] = JSON.parse(localStorage.getItem('productlist') || '[]');
   return productList;
}

export {getInitialState};