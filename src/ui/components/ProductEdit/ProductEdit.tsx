import React, { useState } from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import {Heading} from '../../App/components/Heading';
import { Input } from '../../App/components/Input';
// import './ProductEdit.css';


const ProductEdit: React.FC/*<ProductEditProps>*/ = (/*id, {onChangeIsBougthProduct}*/) => {
  // const [isBought, setIsBought] = useState<boolean>(false)

  // const handleEditNameProduct = (name: string) => {
  //   console.log('name: ', name)
  // }
  // const handleChangeIsBought = () => {
  //   setIsBought(!isBought);
  //   onChangeIsBougthProduct(isBought)
  // }

  return (
    <form className="ProductEdit">
      
    
    </form>
  )
}

export {ProductEdit};

type ProductEditProps = {
  // id: number,
  onChangeIsBougthProduct: (value: string) => void
}
