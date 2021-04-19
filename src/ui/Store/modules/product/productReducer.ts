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


const productReducer = (state = []/*initialState*/ , action: {} /*TodoActions*/)/*: Todo[]*/ => {
    // switch (action.type) {
    //     // case ADD_TODO:
    //     //     return setTodoState (state, action as AddTodoAction );
    //     // case DELETE_TODO:
    //     //     return setDeleteTodo (state, action as DeleteTodoAction)
    //     default:
    //         return state
    // }
    return state
}

export { productReducer/*, setTodoState, setDeleteTodo*/ };

