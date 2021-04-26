import {ProductList} from '../ProductList';
import  * as useSelector from 'react-redux';
import  * as useDispatch from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {products} from '../../../../core/products/fixtures/productsData';

describe('ProductList', () => {

    let mockUseSelector = jest.spyOn(useSelector, 'useSelector');
    const mockUseDispatch = jest.spyOn(useDispatch, 'useDispatch');

    const mockDispatch = jest.fn();

    beforeEach(() => {
        mockUseSelector.mockReturnValue(products);
        mockUseDispatch.mockReturnValue(mockDispatch);
    })

    it('should return an array of products', () => {
         // Act
         render(<ProductList/>);

         // Assert
         expect(screen.getAllByText("Leche").length).toBe(1);
    })

    it('should dispatch be executed when we press the delete button', () => {
        // Act
        render(<ProductList/>);

        const buttonDeleteProduct = screen.getAllByText('Eliminar');
        userEvent.click(buttonDeleteProduct[0]);

        // Assert
        expect(mockDispatch).toHaveBeenCalled();
    })
})