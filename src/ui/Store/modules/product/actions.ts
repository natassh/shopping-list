import {ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from './actionTypes';
import {AddProductAction, DeleteProductAction, EditProductAction} from './types/actions';
import {getProductObject} from '../../../../core/products/utils/getProductObject';

export const AddProduct = (name: string, quantity: string): AddProductAction => {
    const productObject = getProductObject(name, quantity);
    return (
        {
            type: ADD_PRODUCT,
            payload: productObject
        }
    )
}
export const EditProduct = (id: number, name: string,  quantity: string, price: string, isBought: boolean): EditProductAction => ({
    type: EDIT_PRODUCT,
    payload: {id, name, quantity, price, isBought}
});
export const DeleteProduct = (id: number): DeleteProductAction => ({
    type: DELETE_PRODUCT,
    payload: id
});


