import React from 'react';

import './style.css';

const benefits = [
  {
    img: 'https://design110.horoshop.ua/images/2/59778691426562.jpg',
    text: 'Cash on Delivery',
    placeholder: 'Pay only after receiving your order.',
  },
  {
    img: 'https://design110.horoshop.ua/images/3/43238308624479.jpg',
    text: 'Returns & Exchanges',
    placeholder: 'Free within 14 days.',
  },
  {
    img: 'https://design110.horoshop.ua/images/4/49130736523308.jpg',
    text: 'Fast Shipping',
    placeholder: 'To all cities across Ukraine.',
  },
  {
    img: 'https://design110.horoshop.ua/images/5/67872749961715.jpg',
    text: 'Quality Guarantee',
    placeholder: 'Sourced from Europe.',
  },
  {
    img: 'https://design110.horoshop.ua/images/6/22909049789781.jpg',
    text: 'One-Click Purchase',
    placeholder: 'No extra data required.',
  },
];

export const Benefits = () => {
  return (
    <div className="container grid grid-cols-2 gap-4 p-4 mt-10 md:flex md:flex-row md:items-center md:justify-around">
      {benefits.map((benefit, index: number) => (
        <div key={benefit.img} className="flex flex-col items-center relative">
          <img src={benefit.img} alt={'Benefit' + index} />
          <p className="mt-1 font-bold">{benefit.text}</p>
          <div className="absolute top-0 left-0 w-full flex justify-center benefit-hover">
            <span className="bg-black text-white text-xs rounded px-2 py-1">
              {benefit.placeholder}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
