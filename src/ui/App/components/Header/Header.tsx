import React from 'react';
import {WrapperLayout} from '../WrapperLayout';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <WrapperLayout>
        <div className="mainHeader">
          Header
            <h1>
            </h1>
        </div>
      </WrapperLayout>
    </header>
  );
}

export {Header};
