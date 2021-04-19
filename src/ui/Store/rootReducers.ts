import {combineReducers} from 'redux';
import { productReducer } from './modules/product/productReducer';

const rootReducers = combineReducers({
  products: productReducer,
});
export { rootReducers };

export type RootState = ReturnType<typeof rootReducers>