import React from 'react';
import {Header} from '../modules/shared/components/Header';
import {Footer} from '../modules/shared/components/Footer';
import {WrapperLayout} from '../modules/shared/components/WrapperLayout';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <WrapperLayout>
        </WrapperLayout>
        <Footer />
    </div>
  );
}

export {App};