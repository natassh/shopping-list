import {Product} from '../../../ui/Store/modules/product/types/product';

const getTotalCost = (products: Product[]): number => {
    const totalCost = products.reduce( (acc, product) => {
        return acc + parseFloat(product.price);
    }, 0)
    
    return totalCost;
}

export {getTotalCost}