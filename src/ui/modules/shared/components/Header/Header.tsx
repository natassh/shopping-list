import React from 'react';
import { Link } from 'react-router-dom';
import {WrapperLayout} from '../WrapperLayout';
import logo from '../../../../App/assets/images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <WrapperLayout>
        <div className="mainHeader">
          Header
          <Link to={`/`} className="logo">
            <h1>
              <img src={logo} alt="Logo devjobs" />
            </h1>
          </Link>
          <Link to={`/contact`} >Contacto</Link>
          <Link to={`/`} >Home</Link>
        </div>
      </WrapperLayout>
    </header>
  );
}

export {Header};
