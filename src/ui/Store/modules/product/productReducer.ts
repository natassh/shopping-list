import {ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from './actionTypes';
import {ProductActions, AddProductAction, DeleteProductAction, EditProductAction} from './types/actions';
import {Product} from './types/product';
import {getInitialState} from '../../../../core/products/utils/getInitialState';
import {saveProductsInLocalStorage} from '../../../../core/products/utils/saveProductsInLocalStorage';

const initialtate: Product[]= getInitialState();

const setAddProduct = (state: Product[], action: AddProductAction): Product[] => {
    const newProductsList = [...state, action.payload];
    saveProductsInLocalStorage(newProductsList);
    return newProductsList;
}
const setDeleteProduct = (state: Product[], action: DeleteProductAction): Product[] => {
   const newProductsList = state.filter(product => product.id !== action.payload);
   saveProductsInLocalStorage(newProductsList);
   return newProductsList;
}

const productReducer = (state = initialtate , action: ProductActions): Product[] => {
   switch (action.type) {
        case ADD_PRODUCT:
           return setAddProduct (state, action as AddProductAction);
         case DELETE_PRODUCT:
            return setDeleteProduct (state, action as DeleteProductAction);
        default:
            return state;
   }
}

export {productReducer};

