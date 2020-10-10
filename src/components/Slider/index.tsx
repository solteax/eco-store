import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';

const photos = [
  {
    name: 'Photo 1',
    url: 'https://design110.horoshop.ua/content/images/45/49365678440061.jpg',
  },
  {
    name: 'Photo 2',
    url: 'https://design110.horoshop.ua/content/images/15/47003065525938.jpg',
  },
  {
    name: 'Photo 3',
    url: 'https://design110.horoshop.ua/content/images/15/35930161593800.jpg',
  },
];

function Arrow({ type, onClick }: { type: string; onClick?: () => void }) {
  let className = type === 'next' ? 'right-0' : 'left-0';
  className +=
    ' absolute z-50 top-0 h-full flex justify-center items-center px-2 hover:bg-green-500 hover:bg-opacity-25 cursor-pointer transition duration-300 ease-in-out text-green-700 hover:text-opacity-100 text-opacity-25 font-bold text-6xl';
  const char = type === 'next' ? '>' : '<';
  return (
    <span className={className} onClick={onClick}>
      {char}
    </span>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <Arrow type="next" />,
  prevArrow: <Arrow type="prev" />,
};

export const Slider = () => {
  return (
    <SlickSlider {...settings} className="mb-12">
      {photos.map((photo, index) => (
        <img key={index + photo.url} src={photo.url} alt="#" />
      ))}
    </SlickSlider>
  );
};
