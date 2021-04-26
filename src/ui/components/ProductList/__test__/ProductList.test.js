import {ProductList} from '../ProductList';
import  * as useSelector from 'react-redux';
import  * as useDispatch from 'react-redux';
import { render, screen, debug } from '@testing-library/react';
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

    it('should return an array of products "', () => {
        
        // Act
        const { container } = render(<ProductList/>);
        const items = container.querySelectorAll('li')
        
        // Assert
        expect(items).toHaveLength(2);
   })

    it('should have 1 product with the text "Leche"', () => {

         // Act
         render(<ProductList/>);
         const productLeche = screen.getAllByText("Leche")

         // Assert
         expect(productLeche).toHaveLength(1);
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