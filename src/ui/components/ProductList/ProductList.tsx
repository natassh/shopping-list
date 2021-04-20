import React, { useState } from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import {Heading} from '../../App/components/Heading';


const ProductList: React.FC = () => {
  const products = useSelector( (state: RootState) => state.products);
  // console.log('products: ', products);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  console.log('isVisible: ', isVisible);


  const handleEditProduct = (id: number | undefined) => {
    console.log(`Editar: ${id}`);
    setIsVisible(!isVisible)
  }
  const handleDeleteProduct = (id: number | undefined) => {
    console.log(`Eliminar: ${id}`)
  }
  return (
    <section>
      <Heading tag='h2' className='second-title' >Productos en la cesta</Heading>
      <ul>
          {
            products.map((product:Product) => {
              return (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.quantity}u.</p>
                  <div className='actions'>
                  <button onClick={() => handleEditProduct(product.id)}>Editar</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                  </div>
                </li>
              )
            })
          }
      </ul>
    </section>
  )
}

export {ProductList};