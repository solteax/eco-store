import React from 'react';

import { Items } from '../components/Items';
import { Sort } from '../components/Sort';

export const Products = () => {
  // console.log('Rerender Products');
  return (
    <>
      <Sort />
      <Items />
    </>
  );
};
