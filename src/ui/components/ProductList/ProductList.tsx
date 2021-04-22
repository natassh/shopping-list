import React, { useState, useRef } from 'react';
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

  const nameRef = useRef<HTMLInputElement>(null);
  const handleOnChangeNameProduct = (): void => {
    if(nameRef && nameRef.current) {
      setNameProduct(nameRef.current.value)
    } 
  }
  const priceRef = useRef<HTMLInputElement>(null);
  const handleOnChangePriceProduct = (): void => {
    if(priceRef && priceRef.current) {
      setPriceProduct(priceRef.current.value)
    } 
  }
  const quantityRef = useRef<HTMLInputElement>(null);
  const handleOnChangeQuantityProduct = (): void => {
    if(quantityRef && quantityRef.current) {
      setQuantityProduct(quantityRef.current.value)
    } 
  }
  const isBoughtRef = useRef<HTMLInputElement>(null);
  const handleChangeIsBought = (): void => {
    if(isBoughtRef && isBoughtRef.current) {
      setIsBought(!isBought)
    } 
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
                  <p>{product.price}</p>
                  <p>{product.isBought ? "Comprado" : ""}</p>
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
                        <input 
                          id='nameProduct' 
                          title='nameProduct' 
                          type="text" 
                          ref={nameRef} 
                          onChange={handleOnChangeNameProduct} 
                          value={nameProduct} 
                          className='ProductEditForm__Input' 
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='isBought'>Cantidad</label>
                        <input 
                          id='quantityProduct' 
                          title='quantityProduct' 
                          type="text" 
                          ref={quantityRef} 
                          onChange={handleOnChangeQuantityProduct} 
                          value={quantityProduct} 
                          className='ProductEditForm__Input' 
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='priceProduct'>Precio</label>
                        <input 
                          id='priceProduct' 
                          title='priceProduct' 
                          type="text" 
                          ref={priceRef} 
                          onChange={handleOnChangePriceProduct} 
                          value={priceProduct} 
                          className='ProductEditForm__Input' 
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='isBought'>Comprado</label>
                        <input
                          id='isBought'
                          title='isBought'
                          type='checkbox'
                          ref={isBoughtRef} 
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