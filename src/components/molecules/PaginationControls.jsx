import React from 'react';
import Button from '../atoms/Button';
import PageNumber from '../atoms/PageNumber';
import '../../styles/index.css';

export default function PaginationControls({ totalPages, currentPage, onPageChange }) {
  const getPageRange = () => {
    const delta = 2; 
    const range = [];
    const rangeWithDots = [];

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    let prev = 0;
    uniqueRange.forEach(page => {
      if (page - prev > 1) {
        rangeWithDots.push('...');
      }
      rangeWithDots.push(page);
      prev = page;
    });

    return rangeWithDots;
  };

  const pages = getPageRange();

  return (
    <div className="pagination-controls">
      <Button
        text="Prev"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        style={{
          opacity: currentPage === 1 ? 0.5 : 1,
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
        }}
      />

      {pages.map((page, index) => (
        page === '...' ? (
          <span key={`dots-${index}`} style={{ padding: '0 8px', color: '#666' }}>
            ...
          </span>
        ) : (
          <PageNumber
            key={page}
            number={page}
            active={page === currentPage}
            onClick={onPageChange}
          />
        )
      ))}

      <Button
        text="Next"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        style={{
          opacity: currentPage === totalPages ? 0.5 : 1,
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
        }}
      />
    </div>
  );
}