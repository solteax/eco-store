import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../interfaces';
import { setCategory, setSortBy } from '../../redux/actions/filter';
import { SortBy } from './SortBy';

import { SortCategory } from './SortCategory';

const categories = ['All', 'Vegetables', 'Meat/Fish', 'Bakery'];

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
    <div className="container flex justify-between mt-12 flex-col items-start md:items-center md:flex-row">
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
