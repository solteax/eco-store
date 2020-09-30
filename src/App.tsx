import React from 'react';
import { Header } from './components/Header';

import { Route, Switch } from 'react-router-dom';
import { Home, Products } from './pages';

/*
  category:
  0 - all
  1 - Vegetables
  2 - Meet & fish
  3 - Bakery
*/

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
};
