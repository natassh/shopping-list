import React, { useState } from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector, useDispatch } from 'react-redux';
import {Product} from '../../Store/modules/product/types/product';
import { DeleteProduct, UpdateProduct} from '../../Store/modules/product/actions'
import {Heading} from '../../App/components/Heading';
import {Input} from '../../App/components/Input';
import './ProductList.css';


const ProductList: React.FC = () => {

  const dispatch = useDispatch();
  const products = useSelector( (state: RootState) => state.products);
 
  const [nameProduct, setNameProduct] = useState<string>('');
  const [priceProduct, setPriceProduct] = useState<string>('');
  const [isBought, setIsBought] = useState<boolean>(false);
  const [quantityProduct, setQuantityProduct] = useState<string>('');
  const [idCurrentProductInEdition, setIdCurrentProductInEdition] = useState<number>(0);

  const handleOnChangeNameProduct = (name:string): void => {
    setNameProduct(name);
  }
  const handleOnChangePriceProduct = (price:string): void => {
    setPriceProduct(price);
  }
  const handleChangeIsBought = (): void => {
    setIsBought(!isBought)
  }
  const handleOnChangeQuantityProduct = (quantity:string): void => {
    setQuantityProduct(quantity)
  }

  const handleDeleteProduct = (id: number) => {
    dispatch(DeleteProduct(id))
  }

  const handleIsEditingProduct = (id: number, name: string, quantity: string, price: string, isBought:boolean ) => {
      setIdCurrentProductInEdition(id);
      setNameProduct(name);
      setQuantityProduct(quantity);
      setPriceProduct(price);
      setIsBought(isBought);
  }
 
  const handleUpdateProduct = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    dispatch(UpdateProduct(idCurrentProductInEdition, nameProduct, quantityProduct, priceProduct, isBought));
    setIdCurrentProductInEdition(0);
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
                    <button onClick={() => handleIsEditingProduct(product.id, product.name, product.quantity, product.price, product.isBought)}>Editar</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                  </div>
                </div>
                <div>
                  {product.id === idCurrentProductInEdition && (
                    <form className='ProductEditForm' onSubmit={handleUpdateProduct}>
                      <fieldset>
                        <label htmlFor='nameProduct'>Editar nombre</label>
                        <Input
                          id='nameProduct'
                          title='nameProduct'
                          onChange={handleOnChangeNameProduct} 
                          className='ProductEditForm__Input'
                          type='text'
                          value={nameProduct}
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='isBought'>Cantidad</label>
                        <Input
                          id='quantityProduct'
                          title='quantityProduct'
                          onChange={handleOnChangeQuantityProduct} 
                          className='ProductEditForm__Input'
                          type='text'
                          value={quantityProduct}
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='priceProduct'>Precio</label>
                        <Input
                          id='priceProduct'
                          title='priceProduct'
                          onChange={handleOnChangePriceProduct} 
                          className='ProductEditForm__Input'
                          type='text'
                          value={priceProduct}
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='isBought'>Comprado</label>
                        <input
                          type='checkbox'
                          id='isBought'
                          checked={isBought}
                          onChange={handleChangeIsBought}
                        />
                      </fieldset>
                      <button>Guardar</button>
                    </form>
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