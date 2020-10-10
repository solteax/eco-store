import React from 'react';
import { Link } from 'react-router-dom';

import { Cart } from '../Cart';
import logo from '../../assets/logo.jpg';

export const Header: React.FC = () => {
  return (
    <header className="container flex justify-between items-center py-2">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart />
    </header>
  );
};
