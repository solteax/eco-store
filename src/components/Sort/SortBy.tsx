import React from 'react';

export const SortBy = ({ sortTypes, activeSortType, activeOrderType, onClickSortType }: any) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef: any = React.useRef();

  const activeLabel = sortTypes.find(
    (obj: any) => obj.type === activeSortType && obj.order === activeOrderType,
  ).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (type: any, order: any) => {
    if (onClickSortType) {
      onClickSortType(type, order);
    }
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  // console.log('Rerender Sort-SortBy');
  return (
    <div ref={sortRef} className="sort flex relative">
      <div className="sort__label flex items-center">
        <b className="mx-2 border-b-2 border-dashed border-transparent">Сортировать по:</b>
        <span
          onClick={toggleVisiblePopup}
          className="border-b-2 border-dashed border-custom-green font-bold text-custom-green cursor-pointer">
          {activeLabel}
        </span>
      </div>
      {visiblePopup && (
        <div className="sort__popup absolute shadow-md bg-gray-200 z-50 right-0 mt-12 rounded">
          <ul className="flex flex-col">
            {sortTypes &&
              sortTypes.map((obj: any, index: number) => {
                let activeSortByClass =
                  activeSortType === obj.type && activeOrderType === obj.order
                    ? 'text-custom-green bg-green-100'
                    : '';

                activeSortByClass += ' px-4 py-2 cursor-pointer font-bold';

                return (
                  <li
                    onClick={() => onSelectItem(obj.type, obj.order)}
                    className={activeSortByClass}
                    key={`${obj.type}_${index}`}>
                    {obj.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
