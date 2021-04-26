import {productReducer} from '../productReducer';
import * as types from '../actionTypes';
import { render, screen } from '@testing-library/react';
import {products} from '../../../../../core/products/fixtures/productsData'

describe('products reducer', () => {

    const initialState = products;

    it('should return empty array as initial state', () => {

        // Assert
        expect(productReducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_PRODUCT', () => {
        
        // Arrange 
        const product3 = {
            id: 3,
            name: 'Agua',
            quantity: '6',
            price: '3.25',
            isBought: true,
        }

        // Act      
        const state = productReducer(initialState, {
            type: types.ADD_PRODUCT,
            payload: product3
        });

        // Assert
        expect(state).toHaveLength(3);
        
    })

    it('should return the array with the product id 2 removed', () => {

        // Act 
        const state = productReducer(initialState, {
            type: types.DELETE_PRODUCT,
            payload: 2
        });

        // Assert
        expect(state).toHaveLength(1);
    })

    it('should return an array of 2 products', () => {

        // Arrange 
        const productExpected = {
            id: 2,
            name: 'NaranjasMalla',
            quantity: '1',
            price: '5',
            isBought: false,
        }

         // Act 
         const state = productReducer(initialState, {
            type: types.UPDATE_PRODUCT,
            payload: productExpected
        });

        // Assert
        expect(state).toHaveLength(2);
    })
    it('should return an array of products with the name of a modified product', () => {
        
        // Arrange 
        const productExpected = {
            id: 2,
            name: 'NaranjasMalla',
            quantity: '1',
            price: '5',
            isBought: false,
        }

         // Act 
         const state = productReducer(initialState, {
            type: types.UPDATE_PRODUCT,
            payload: productExpected
        });

        // Assert
        expect(state[1].name).toBe('NaranjasMalla');
    })
})