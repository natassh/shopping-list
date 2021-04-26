import {AddProductForm} from '../AddProductForm';
import  * as useDispatch from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AddProductForm', () => {
    const mockUseDispatch = jest.spyOn(useDispatch, 'useDispatch');
    const mockDispatch = jest.fn();

    beforeEach(() => {
        mockUseDispatch.mockReturnValue(mockDispatch);
    })

    it('should show the text "Manzanas" in the input of the product name', () => {

        // Act
        render(<AddProductForm/>);
        const inputName = screen.getByLabelText('Producto');
        fireEvent.change(inputName, { target: { value: 'Manzanas' } });

        // Assert
        expect(inputName.value).toBe('Manzanas')
    })

    it('should show the number 7 in the input of the quantity of the product', () => {

        // Act
        render(<AddProductForm/>);
        const inputQuantity = screen.getByLabelText('Cantidad');
        fireEvent.change(inputQuantity, { target: { value: '7' } });

        // Assert
        expect(inputQuantity.value).toBe('7')
    })

    it('should dispatch be executed when we press the add product button', () => {

        // Act
        render(<AddProductForm/>);
        const buttonAddproduct = screen.getByText('Añadir');
        userEvent.click(buttonAddproduct);

        // Assert
        expect(mockDispatch).toHaveBeenCalled();
    })


})