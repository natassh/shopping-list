import React, { useState } from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import {Heading} from '../../App/components/Heading';
import { Input } from '../../App/components/Input';


const ProductEdit: React.FC/*<ProductEditProps>*/ = (/*id: string*/) => {

  const handleEditNameProduct = (name: string) => {
    console.log('name: ', name)
  }
  return (
    <form className="ProductEdit">
       <fieldset>
          <label htmlFor='nameProduct'>Producto</label>
          {/* <Input
            id='nameProduct'
            title='nameProduct'
            onChange={handleEditNameProduct} 
            className='AddProductForm__Input'
            type='text'
            value={nameProduct}
            placeholder = 'Introduce el nombre de producto'
          /> */}
        </fieldset>
    </form>
  )
}

export {ProductEdit};

type ProductEditProps = {
  id: number
}
