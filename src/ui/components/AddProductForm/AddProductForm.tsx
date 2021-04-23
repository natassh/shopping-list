import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {AddProduct} from '../../Store/modules/product/actions';
import {Heading} from '../../App/components/Heading';
import {Input} from '../../App/components/Input';
import './AddProductForm.css';

const AddProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const [nameProduct, setProductName] = useState<string>('');
  const [quantityProduct, setQuantityProduct] = useState<string>('');

  const handleOnChangeNameProduct = (name:string): void => {
    setProductName(name);
  }
  const handleOnChangeQuantityProduct = (quantity:string): void => {
    setQuantityProduct(quantity);
  }
  const handleOnSubmitPruduct = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(AddProduct(nameProduct, quantityProduct));
    setProductName('');
    setQuantityProduct('');
  }

  return (
    <section /*className='secForm'*/>
      <Heading tag='h2' className='second-title' >Añade un producto a la cesta</Heading>
      <form className='AddProductForm' onSubmit={handleOnSubmitPruduct}>
          <fieldset>
            <label htmlFor='nameProduct'>Producto</label>
            <Input
              id='nameProduct'
              title='nameProduct'
              onChange={handleOnChangeNameProduct} 
              className='FormInput'
              type='text'
              value={nameProduct}
              placeholder = 'Introduce el nombre de producto'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='quantityProduct'>Cantidad</label>
            <Input
              id='quantityProduct'
              title='quantityProduct'
              onChange={handleOnChangeQuantityProduct} 
              className='FormInput quantityProduct'
              type='text'
              value={quantityProduct}
              placeholder = '1'
            />
          </fieldset>
          <button>Añadir</button>
      </form>
    </section>
  )
}

export {AddProductForm};