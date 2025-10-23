import React, { useState } from 'react';
import PaginationControls from '../molecules/PaginationControls';
import '../../styles/index.css';

export default function Pagination({ totalItems, itemsPerPage, onChangePage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onChangePage(page);
  };

  return (
    <div className="pagination">
      <PaginationControls
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
