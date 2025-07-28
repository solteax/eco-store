import React from 'react';

import { useSelector } from 'react-redux';
import { productItem } from '../../interfaces';

const ExtraInner = ({
  buyHandler,
  item,
  activeClass,
}: {
  buyHandler: (item: productItem, amount: number) => void;
  item: productItem;
  activeClass: boolean;
}) => {
  const amount = useSelector((
    { cart }: any, // store
  ) => (cart.items[item.id] ? cart.items[item.id].amount : null));

  const [totalAmount, setTotalAmount] = React.useState(amount ? amount : 1);
  const [isAdded, setIsAdded] = React.useState(false);
  return (
    <div
      className={`${
        activeClass
          ? 'border-custom-green absolute -bottom-70 -left-1 border border-4 border-t-0 z-50 box-content'
          : 'hover:border-custom-green'
      } w-full bg-white `}>
      <div className={`${activeClass ? 'px-3 xl:px-12' : ''} flex items-center justify-around py-4`}>
        {isAdded && amount ? (
          <button className="bg-custom-green rounded px-4 py-2 text-base text-white opacity-50 focus:outline-none">
            In cart ({amount})
          </button>
        ) : (
          <>
            <div className="border rounded">
              <button
                onClick={() => {
                  if (totalAmount > 1) setTotalAmount(totalAmount - 1);
                }}
                className="text-base py-2 px-4 focus:outline-none hover:text-custom-green hover:font-bold">
                -
              </button>
              <b>{totalAmount}</b>
              <button
                onClick={() => setTotalAmount(totalAmount + 1)}
                className="text-base py-2 px-4 focus:outline-none hover:text-custom-green hover:font-bold">
                +
              </button>
            </div>
            <button
              onClick={() => {
                buyHandler(item, totalAmount);
                setIsAdded(true);
              }}
              className="bg-custom-green rounded px-4 py-2 text-base text-white hover:bg-custom-green-hover focus:outline-none"
            >
              {amount > 1 ? "Update" : "Add"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const Extra = React.memo(ExtraInner);
