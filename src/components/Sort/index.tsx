import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filter';
import { SortBy } from './SortBy';

import { SortCategory } from './SortCategory';

const categories = ['Все', 'Овощи', 'Мясо/рыба', 'Выпечка'];
const sortTypes = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене ↑', type: 'price', order: 'asc' },
  { name: 'цене ↓', type: 'price', order: 'desc' },
  { name: 'алфавиту ↓', type: 'name', order: 'asc' },
  { name: 'алфавиту ↑', type: 'name', order: 'desc' },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filter }: any) => filter);

  const onSelectCategory = (index: number) => {
    dispatch(setCategory(index));
  };

  const onSelectSortType = (type: any, order: any) => {
    dispatch(setSortBy({ type, order }));
  };
  // console.log('Rerender Sort');
  return (
    <div className="container flex items-center justify-between mt-12">
      <SortCategory
        categories={categories}
        activeCategory={category}
        categoryHandler={onSelectCategory}
      />
      <SortBy
        sortTypes={sortTypes}
        activeSortType={sortBy.type}
        activeOrderType={sortBy.order}
        onClickSortType={onSelectSortType}
      />
    </div>
  );
};
