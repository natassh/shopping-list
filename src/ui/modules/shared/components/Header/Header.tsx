import React from 'react';
import {WrapperLayout} from '../WrapperLayout';
import logo from '../../../../App/assets/images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <WrapperLayout>
        <div className="mainHeader">
          Header
            <h1>
              <img src={logo} alt="Logo devjobs" />
            </h1>
        </div>
      </WrapperLayout>
    </header>
  );
}

export {Header};
