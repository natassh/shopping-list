import React from 'react';
import {Footer} from './components/Footer';
import {WrapperLayout} from './components/WrapperLayout';
import {Heading} from '../App/components/Heading';
import { AddProductForm } from '../components/AddProductForm';
import { ProductList } from '../components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
        <WrapperLayout>
          <Heading tag="h1" className="main-title" >Lista de la compra</Heading>
          <AddProductForm/>
          <ProductList/>
        </WrapperLayout>
        <Footer />
    </div>
  );
}

export {App};