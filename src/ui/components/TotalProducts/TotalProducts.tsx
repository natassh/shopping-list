import React, { useEffect, useState } from 'react';
import {Heading} from '../../App/components/Heading';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import {getTotalCost} from '../../../core/products/utils'
import './TotalProducts.css';


const TotalProducts: React.FC = () => {
  const products: Product[] = useSelector( (state: RootState) => state.products);

  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const total:any = getTotalCost(products);
    setTotalCost(total);
  },[products])

  return (
    <>
    <Heading tag='h4' >Total:</Heading>
    <p>Productos: <strong>{products.length}</strong></p>
    <p>Coste: {totalCost} €<strong></strong></p>
    </>
  )
}

export {TotalProducts};