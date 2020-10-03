import React from 'react';
const sortTypes = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене ↑', type: 'price', order: 'asc' },
  { name: 'цене ↓', type: 'price', order: 'desc' },
  { name: 'алфавиту ↓', type: 'name', order: 'asc' },
  { name: 'алфавиту ↑', type: 'name', order: 'desc' },
];

export const SortBy = (props: {
  activeSortType: string;
  activeOrderType: string;
  onClickSortType: (type: string, order: string) => void;
}) => {
  const { activeSortType, activeOrderType, onClickSortType } = props;
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef(null);

  const labelObj = sortTypes.find(
    (obj) => obj.type === activeSortType && obj.order === activeOrderType,
  );
  const activeLabel: string = labelObj ? labelObj.name : sortTypes[0].name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event: any) => {
    //MouseEvent
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (type: string, order: string) => {
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
              sortTypes.map((obj, index: number) => {
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
