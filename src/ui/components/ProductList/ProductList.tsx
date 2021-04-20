import React from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';

const ProductList: React.FC = () => {
    const products = useSelector( (state: RootState) => state.products);
    console.log('products: ', products)
    return (
        <p>ProductList</p>
    )
}

export {ProductList};