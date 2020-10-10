import React from 'react';

import './style.css';

const benefits = [
  {
    img: 'https://design110.horoshop.ua/images/2/59778691426562.jpg',
    text: 'Оплата при получении',
    placeholder: 'Платите только после получения.',
  },
  {
    img: 'https://design110.horoshop.ua/images/3/43238308624479.jpg',
    text: 'Возврат и обмен',
    placeholder: 'Бесплатно в течении 14 дней.',
  },
  {
    img: 'https://design110.horoshop.ua/images/4/49130736523308.jpg',
    text: 'Быстрая доставка',
    placeholder: 'Все города Украины.',
  },
  {
    img: 'https://design110.horoshop.ua/images/5/67872749961715.jpg',
    text: 'Гарантия качества',
    placeholder: 'Поставки из Европы.',
  },
  {
    img: 'https://design110.horoshop.ua/images/6/22909049789781.jpg',
    text: 'Покупка в один клик',
    placeholder: 'Без заполенния лишних данных.',
  },
];

export const Benefits = () => {
  return (
    <div className="container flex items-center justify-around p-4 mt-10">
      {benefits.map((benefit, index: number) => (
        <div key={benefit.img} className="w-1/5 flex flex-col items-center relative benefit">
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
