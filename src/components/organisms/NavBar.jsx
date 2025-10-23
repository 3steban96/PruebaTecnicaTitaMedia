import React, { useState } from 'react'
import SearchBar from '../molecules/SearchBar.jsx'

export default function NavBar({ onSortChange, onSearchChange }) {
  const [sortBy, setSortBy] = useState('number');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSortBy(newSort);
    onSortChange(newSort);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    onSearchChange(term);
  };

  return (
    <div>
      <SearchBar
        sortBy={sortBy} 
        onSortChange={handleSortChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
    </div>
  )
}