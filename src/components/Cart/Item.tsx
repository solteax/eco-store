import React from 'react';

import { useDispatch } from 'react-redux';
import { decrementAmount, incrementAmount, removeFromCart } from '../../redux/actions/cart';

export const Item = ({
  name,
  price,
  imageUrl,
  amount,
  id,
  forceUpdate,
  updateParam,
}: {
  name: string;
  price: number;
  imageUrl: string;
  amount: number;
  id: number;
  forceUpdate(param: boolean): void;
  updateParam: boolean;
}) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementAmount(id));
  };

  const decrementHandler = () => {
    if (amount > 1) dispatch(decrementAmount(id));
  };

  const deleteItemHandler = () => {
    dispatch(removeFromCart(id));
    forceUpdate(!updateParam);
  };
  // console.log('Rerender Cart-Item');

  React.useEffect(() => {}, [dispatch]);

  return (
    <div className="flex justify-between border rounded mb-1 pr-8 py-2 cart-item relative">
      <span
        onClick={deleteItemHandler}
        className="absolute top-0 right-0 text-red-500 mr-2 font-bold cursor-pointer hover:text-red-700">
        x
      </span>
      <div className="flex w-3/5">
        <img className="h-20 p-2" src={imageUrl} alt="#" />
        <div className="flex flex-col justify-center">
          <p>{name}</p>
          <span>{price} грн</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-2/5">
        <div className="border rounded">
          <button onClick={decrementHandler} className="text-base py-2 px-4 focus:outline-none">
            -
          </button>
          <b>{amount}</b>
          <button onClick={incrementHandler} className="text-base py-2 px-4 focus:outline-none">
            +
          </button>
        </div>
        <span>{price * amount} грн</span>
      </div>
    </div>
  );
};
