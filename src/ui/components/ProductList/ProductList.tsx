import React, { useState } from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector, useDispatch } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import { DeleteProduct } from '../../Store/modules/product/actions';
import {Heading} from '../../App/components/Heading';
import { ProductEdit } from '../ProductEdit';


const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector( (state: RootState) => state.products);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditProduct = (id: number) => {
    console.log(`Editar: ${id}`);
      setIsEditing(!isEditing);
   
  }
  const handleDeleteProduct = (id: number) => {
    dispatch(DeleteProduct(id))
  }

  return (
    <section>
      <Heading tag='h2' className='second-title' >Productos en la cesta</Heading>
      <ul>
        {
          products.map((product:Product) => {
            return (
              <li key={product.id}>
                <div>
                  <p>{product.name}</p>
                  <p>{product.quantity}u.</p>
                  <div className='actions'>
                    <button onClick={() => handleEditProduct(product.id)}>Editar</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                  </div>
                </div>
                <div>
                  {isEditing && (
                    <ProductEdit/>
                  )}
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