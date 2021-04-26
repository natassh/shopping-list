import {TotalProducts} from '../TotalProducts';
import  * as useSelector from 'react-redux';
import { render, screen } from '@testing-library/react';
import {products} from '../../../../core/products/fixtures/productsData';

describe('TotalProducts', () => {
    let mockUseSelector = jest.spyOn(useSelector, 'useSelector');
    beforeEach(() => {
        mockUseSelector.mockReturnValue(products);
    })

    it('should show a total of 2 products', () => {

        // Arrenge
        const totalProducts = '2';

        // Act
        render(<TotalProducts/>);
        const totalElement = screen.getByText(totalProducts)
         
        // Assert
        expect(totalElement).toBeInTheDocument();
    })

    it('should show a total cost of 13 €', () => {

        // Arrenge
        const totalCostCart = '13 €';

        // Act
        render(<TotalProducts/>);
        const totalElement = screen.getByText(totalCostCart)
         
        // Assert
        expect(totalElement).toBeInTheDocument();
    })
})