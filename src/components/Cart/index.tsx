import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item';
import { store } from '../../interfaces';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cart';

import './style.css';

export const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [updateParam, forceUpdate] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const items = useSelector(({ cart }: store) => cart.items);
  const hasItems = Object.keys(items).length > 0;

  const handleBuy = () => {
    alert('Order has been placed!');
    dispatch(clearCart());
    setIsOpen(false);
  };

  const totalAmount = Object.values(items).reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = Object.values(items).reduce((acc, item) => acc + item.price * item.amount, 0);

  const handleOutsideClick = React.useCallback((event: MouseEvent) => {
    const path = event.composedPath?.();
    if (sortRef.current && path && !path.includes(sortRef.current)) {
      setIsOpen(false);
    }
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, handleOutsideClick]);

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => hasItems && setIsOpen(true)}
        className="fill-current text-green-500 text-base w-6 h-6 cursor-pointer relative">
        <svg className="block" viewBox="0 0 24 22">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.013.134C10.534-.142 9.61.022 9.334.5l-5 7.66c-.276.479.2 1.09.679 1.367s1.09.112 1.365-.366l5-7.66a1.001 1.001 0 0 0-.365-1.367zm8.654 8.026l-5-7.66c-.276-.478-1.201-.642-1.679-.366a1 1 0 0 0-.366 1.366l5 7.66a.999.999 0 0 0 1.366.366c.478-.276.954-.887.679-1.366z"></path>
          <path d="M23.999 10a2 2 0 0 0-2-2H2C.896 8 0 9 0 10v1c0 .924.933 1.632 2 2l1 7c.375 1.501 1.343 2 2 2h14c1.188 0 1.813-.938 2-2l1-7c.852-.229 2-1.076 2-2l-.001-1zM22 10.002v.756c0 .118-.358.267-.521.311l-1.272.343-.187 1.305-.995 6.962a1.193 1.193 0 0 1-.102.321H5.15a1.17 1.17 0 0 1-.187-.4l-.983-6.883-.173-1.209-1.155-.398A2.22 2.22 0 0 1 2 10.777v-.731A.195.195 0 0 1 2.04 10H22v.002z"></path>
        </svg>
        {hasItems && 
          <div className="absolute top-0 right-5 h-0 w-0 px-2 py-2 text-xs font-bold rounded-full bg-green-500 text-white flex items-center justify-center">
            {totalAmount}
          </div>
        }
      </div>
      {isOpen && 
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 overflow-y-auto" style={{ zIndex: 100 }}>
          <div
            ref={sortRef}
            className="relative mx-auto my-12 shadow-md max-w-2xl bg-white p-4 flex flex-col rounded">
            <div className="flex justify-between mb-4 p-4">
              <p className="text-2xl">Cart</p>
              <span className="cursor-pointer font-bold" onClick={closeCart}>
                x
              </span>
            </div>
            {hasItems  &&
              <div className="flex justify-between text-xs mb-1 pr-8">
                <div className="flex w-3/5"></div>
                <div className="flex items-center justify-between w-2/5 ml-6 text-gray-800">
                  <p>Quantity</p>
                  <p>Price</p>
                </div>
              </div>
            }
            {hasItems ? (
              Object.entries(items).map((item, index: number) => {
                return (
                  <Item
                    key={item[1].name + item[1].price + index}
                    forceUpdate={forceUpdate}
                    updateParam={updateParam}
                    id={+item[0]}
                    {...item[1]}
                  />
                );
              })
            ) : (
              <div className="flex justify-center">Cart is empty</div>
            )}

            <div className="flex justify-between mb-1 px-8 py-4">
              <div
                onClick={closeCart}
                className="flex relative font-bold w-3/5 items-end cursor-pointer hover:text-custom-green hover:border-custom-green back-button">
                <i className="arrow-left"></i> Back
              </div>
              {hasItems &&
                <div className="flex justify-around w-2/5 flex-col items-end">
                  <p className="pb-4">
                    Total{' '}
                    <b className="ml-1">
                      {totalPrice} UAH
                    </b>
                  </p>
                  <button 
                    onClick={handleBuy}
                    className="bg-custom-green rounded px-4 py-2 text-base text-white hover:bg-custom-green-hover focus:outline-none"
                  >
                    Buy
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </>
  );
};
