import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './actionTypes';
import {ProductActions, AddProductAction, DeleteProductAction, UpdateProductAction} from './types/actions';
import {Product} from './types/product';
import {getInitialState} from '../../../../core/products/utils/getInitialState';
import {saveProductsInLocalStorage} from '../../../../core/products/utils/saveProductsInLocalStorage';
import { getProductIndexFromName, getUpdatedProducts } from '../../../../core/products/utils';

const initialtate: Product[]= getInitialState();

const setAddProduct = (state: Product[], action: AddProductAction): Product[] => {
   const productIndex = getProductIndexFromName(state, action.payload);
   if(productIndex !== -1) {
      const productsList = getUpdatedProducts(state, productIndex, action.payload)
      saveProductsInLocalStorage(productsList);
      return productsList;
   }
   const newProductsList = [...state, action.payload];
   saveProductsInLocalStorage(newProductsList);
   return newProductsList;
}
const setDeleteProduct = (state: Product[], action: DeleteProductAction): Product[] => {
   const newProductsList = state.filter(product => product.id !== action.payload);
   saveProductsInLocalStorage(newProductsList);
   return newProductsList;
}
const setUpdateProduct = (state: Product[], action: UpdateProductAction): Product[] => {
   const indexOfProductToEdit = state.findIndex(product => product.id === action.payload.id);
   const productsList = [...state];
   productsList[indexOfProductToEdit] = action.payload;
   saveProductsInLocalStorage(productsList);
   return productsList;
}

const productReducer = (state = initialtate , action: ProductActions): Product[] => {
   switch (action.type) {
        case ADD_PRODUCT:
           return setAddProduct (state, action as AddProductAction);
         case DELETE_PRODUCT:
            return setDeleteProduct (state, action as DeleteProductAction);
         case UPDATE_PRODUCT:
            return setUpdateProduct (state, action as UpdateProductAction);
        default:
            return state;
   }
}

export {productReducer};



