import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../interfaces';
import { setCategory, setSortBy } from '../../redux/actions/filter';
import { SortBy } from './SortBy';

import { SortCategory } from './SortCategory';

const categories = ['Все', 'Овощи', 'Мясо/рыба', 'Выпечка'];

export const Sort = () => {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filter }: store) => filter);

  const onSelectCategory = (index: number) => {
    dispatch(setCategory(index));
  };

  const onSelectSortType = (type: string, order: string) => {
    dispatch(setSortBy({ type, order }));
  };

  return (
    <div className="container flex items-center justify-between mt-12">
      <SortCategory
        categories={categories}
        activeCategory={category}
        categoryHandler={onSelectCategory}
      />
      <SortBy
        activeSortType={sortBy.type}
        activeOrderType={sortBy.order}
        onClickSortType={onSelectSortType}
      />
    </div>
  );
};
