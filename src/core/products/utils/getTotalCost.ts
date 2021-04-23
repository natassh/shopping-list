import {Product} from '../../../ui/Store/modules/product/types/product';

const getTotalCost = (products: Product[]): number => {
    const costs:any= [0];
    products.forEach((product: Product) => {
      if(product.price !== '') {
        costs.push(parseInt(product.price))
      }
    })
    const totalAmount = costs.reduce((total:number, amount:number) => total + amount)
    if(totalAmount) {
      return totalAmount;
    } 
    return 0;
}

export {getTotalCost}