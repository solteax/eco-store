import React from 'react';

const paginationStyles = 'cursor-pointer hover:underline px-2 hover:text-custom-green';

export const Pagination = ({ currentPage, totalPosts, itemsPerPage, handleSetPage }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center mt-10">
      <span
        className="px-3 py-1 border rounded cursor-pointer hover:border-custom-green"
        onClick={handleSetPage.bind(null, 1)}>
        {'<'}
      </span>
      {pageNumbers.map((page: number, index: number) => (
        <span
          key={'page-' + index}
          className={
            page === currentPage
              ? paginationStyles + ' font-bold text-custom-green hover:no-underline'
              : paginationStyles
          }
          onClick={handleSetPage.bind(null, page)}>
          {page}
        </span>
      ))}
      <span
        className="px-3 py-1 border rounded cursor-pointer hover:border-custom-green"
        onClick={handleSetPage.bind(null, pageNumbers.length)}>
        {'>'}
      </span>
    </div>
  );
};
