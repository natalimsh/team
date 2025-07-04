// src/components/PaginationControls.js
import React, { useMemo } from 'react';
// Імпортуємо потрібні іконки з react-icons
import { MdFirstPage, MdLastPage, MdChevronLeft, MdChevronRight } from 'react-icons/md';
// Якщо ви хочете RiNumber0, його імпортують так:
// import { RiNumber0 } from 'react-icons/ri';

const PaginationControls = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = useMemo(() => {
    if (itemsPerPage <= 0) return 1;
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const paginationRange = useMemo(() => {
    const range = [];
    const maxPagesToShow = 5; // Наприклад, показуємо до 5 кнопок сторінок

    // Логіка для відображення діапазону сторінок з еліпсисами
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
        range.push(1); // Завжди показуємо першу сторінку
        if (startPage > 2) {
            range.push('...'); // Еліпсис на початку, якщо є пропуск
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        range.push(i);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            range.push('...'); // Еліпсис в кінці, якщо є пропуск
        }
        range.push(totalPages); // Завжди показуємо останню сторінку
    }

    return range;
  }, [totalPages, currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    onPageChange(1);
  };

  const goToLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="pagination-controls">
      {/* Кнопка "На першу сторінку" */}
      <button onClick={goToFirstPage} disabled={currentPage === 1} className="pagination-first-last">
        <MdFirstPage />
      </button>

      {/* Кнопка "Попередня сторінка" */}
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        <MdChevronLeft />
      </button>

      {/* Кнопки з номерами сторінок та еліпсисами */}
      {paginationRange.map(pageNumber => (
        pageNumber === '...' ? (
            <span key={pageNumber + Math.random()} className="pagination-ellipsis">...</span>
        ) : (
            <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={currentPage === pageNumber ? 'active-page' : ''}
                disabled={currentPage === pageNumber}
            >
                {/* Приклад використання RiNumber0 - краще залишити просто {pageNumber} */}
                {/* {pageNumber === 0 ? <RiNumber0 /> : pageNumber} */}
                {pageNumber} {/* Зазвичай тут просто число сторінки */}
            </button>
        )
      ))}

      {/* Кнопка "Наступна сторінка" */}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        <MdChevronRight />
      </button>

      {/* Кнопка "На останню сторінку" */}
      <button onClick={goToLastPage} disabled={currentPage === totalPages} className="pagination-first-last">
        <MdLastPage />
      </button>

      <p className="page-info">Сторінка {currentPage} з {totalPages}</p>
    </div>
  );
};

export default PaginationControls;