import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {WrapperLayout} from './components/WrapperLayout';
import { AddProductForm } from '../components/AddProductForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <WrapperLayout>
          <AddProductForm/>
        </WrapperLayout>
        <Footer />
    </div>
  );
}

export {App};