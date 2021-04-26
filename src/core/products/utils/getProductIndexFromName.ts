import {Product} from '../../../ui/Store/modules/product/types/product';

const getProductIndexFromName = (products: Product[], productObject: Product): number => {
   const indexProduct = products.findIndex(product => product.name.toLowerCase() === productObject.name.toLowerCase());
   return indexProduct;
}

export {getProductIndexFromName};