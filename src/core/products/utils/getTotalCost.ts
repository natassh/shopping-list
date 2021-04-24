import {Product} from '../../../ui/Store/modules/product/types/product';

const getTotalCost = (products: Product[]): any => {
    const totalCost = products.reduce((total, amount) => total + parseFloat(amount.price),0)
    return totalCost;
}

export {getTotalCost}