import {Product} from '../../../ui/Store/modules/product/types/product';

const getUpdatedProducts = (products: Product[], indexProductFound: number, product: Product): Product[] => {
   const productsList = [...products];
   productsList[indexProductFound]['quantity'] = product.quantity;
   return productsList
}

export {getUpdatedProducts};