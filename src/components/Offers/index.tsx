import React from 'react';

const offers = [
  'https://design110.horoshop.ua/content/images/18/31009338637419.jpg',
  'https://design110.horoshop.ua/content/images/43/87316607978284.jpg',
];
// console.log('Rerender Offers');
export const Offers = () => {
  return (
    <div className="container flex flex-wrap">
      {offers.map((offer: string, index: number) => (
        <img
          key={offer + index}
          className="md:w-1/2 sm:w-full rounded-full p-4"
          src={offer}
          alt="#"
        />
      ))}
    </div>
  );
};
