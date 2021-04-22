import {ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './actionTypes';
import {AddProductAction, DeleteProductAction, UpdateProductAction} from './types/actions';
import {getProductObject, getProductToEditObject} from '../../../../core/products/utils/';

export const AddProduct = (name: string, quantity: string): AddProductAction => {
    const productObject = getProductObject(name, quantity);
    return (
        {
            type: ADD_PRODUCT,
            payload: productObject
        }
    )
}
export const DeleteProduct = (id: number): DeleteProductAction => ({
    type: DELETE_PRODUCT,
    payload: id
});
export const UpdateProduct = (id: number, name: string,  quantity: string, price: string, isBought: boolean): UpdateProductAction => {
    const productToEditObject = getProductToEditObject(id, name, quantity, price, isBought)
    return (
        {
            type: UPDATE_PRODUCT,
            payload: productToEditObject
        }
    )
};


