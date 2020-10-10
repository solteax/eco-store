import React from 'react';

import { Slider } from '../components/Slider';
import { Items } from '../components/Items';
import { Offers } from '../components/Offers';
import { Promotion } from '../components/Promotion';
import { Benefits } from '../components/Benefits';

export const Home = () => {
  return (
    <>
      <Slider />
      <Offers />
      <Items />
      <Promotion />
      <Benefits />
    </>
  );
};
