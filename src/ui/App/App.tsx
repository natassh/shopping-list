import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './router/Routes';
import {Header} from '../modules/shared/components/Header';
import {Footer} from '../modules/shared/components/Footer';
import {WrapperLayout} from '../modules/shared/components/WrapperLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <WrapperLayout>
          <Routes/>
        </WrapperLayout>
        <Footer />
      </Router>
    </div>
  );
}

export {App};