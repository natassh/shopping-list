import {Product} from './product';

export type AddProductAction = {
    type: string,
    payload: Product
};
export type DeleteProductAction = {
    type: string,
    payload: number
};
export type EditProductAction = {
    type: string,
    payload: Product
}

export type ProductActions = AddProductAction | DeleteProductAction | EditProductAction;