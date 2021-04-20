import {ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from './actionTypes';
import {ProductActions, AddProductAction, DeleteProductAction, EditProductAction} from './types/actions';
import {Product} from './types/product';
import {getInitialState} from '../../../../core/products/utils/getInitialState';
import {saveLocalStorage} from '../../../../core/products/utils/saveLocalStorage';

const initialtate: Product[]= getInitialState();

const setAddProduct = (state: Product[], action: AddProductAction): Product[] => {
    const newProductsList = [...state, action.payload];
    saveLocalStorage(newProductsList);
    return newProductsList;
}

const productReducer = (state = initialtate , action: ProductActions): Product[] => {
   switch (action.type) {
        case ADD_PRODUCT:
           return setAddProduct (state, action as AddProductAction);
        default:
            return state;
   }
}

export { productReducer/*, setTodoState, setDeleteTodo*/ };





