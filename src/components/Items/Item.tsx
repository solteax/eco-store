import React from 'react';
import { productItem } from '../../interfaces';
import { Extra } from './Extra';

const ItemInner = ({
  extraHide,
  item,
  buyHandler,
}: {
  extraHide: boolean;
  item: productItem;
  buyHandler: (item: productItem, amount: number) => void;
}) => {
  const { name, imageUrl, price } = item;

  const [isExtra, setIsExtra] = React.useState(false);

  return (
    <div
      className="relative bg-white border p-4 cursor-pointer h-full hover:border-custom-green hover:border-4  hover:border-b-0"
      onMouseEnter={()=>setIsExtra(true)}
      onMouseLeave={()=>setIsExtra(false)}
      onClick={()=>setIsExtra(true)}
    >
      <div className="flex flex-col justify-end">
        <div className="h-64 flex items-center overflow-hidden">
          <img src={imageUrl} alt="#" />
        </div>
        <div className="text-2xl text-center hover:text-custom-green leading-none p-4 h-20 flex items-center justify-center">{name}</div>
        <div className="text-base text-center text-custom-green font-bold">{price} UAH</div>
      </div>
      {extraHide ? (
        isExtra &&
          <Extra buyHandler={buyHandler} item={item} activeClass={true} />
      ) : (
        <Extra buyHandler={buyHandler} item={item} activeClass={false} />
      )}
    </div>
  );
};

export const Item = React.memo(ItemInner);
