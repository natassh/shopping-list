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

const productReducer = (state = initialtate , action: ProductActions): Product[] => {
   switch (action.type) {
        case ADD_PRODUCT:
           return setAddProduct (state, action as AddProductAction);
        default:
            return state;
   }
}

export { productReducer/*, setTodoState, setDeleteTodo*/ };


// import { ADD_TODO, DELETE_TODO } from './actionTypes';
// import { Todo } from './types/todo';
// import { AddTodoAction, DeleteTodoAction, TodoActions } from './types/actions';

// const initialState: Todo[] = [];

// const setTodoState = (state: Todo[], action: AddTodoAction): Todo[] => {
//     return [...state, action.payload]
// }

// const setDeleteTodo = (state: Todo[], action: DeleteTodoAction): Todo[] => {
//     const newTodoList = state.filter(
//         todo => todo.id !== action.payload
//       );
//     return newTodoList;
// }


// const todoReducer = (state = initialState , action: TodoActions): Todo[] => {
//     switch (action.type) {
//         case ADD_TODO:
//             return setTodoState (state, action as AddTodoAction );
//         case DELETE_TODO:
//             return setDeleteTodo (state, action as DeleteTodoAction)
//         default:
//             return state
//     }
// }

// export { todoReducer, setTodoState, setDeleteTodo };




