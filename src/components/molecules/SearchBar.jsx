import { useState, useRef } from 'react';
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import SortCard from '../organisms/SortCard';
import '../../styles/index.css';

export default function SearchBar({ sortBy, onSortChange, searchTerm, onSearchChange }) {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);
  
  const handleFilterChange = () => {
    setVisible(!visible);
  };

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };
  
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <Input 
          text={"Search Pokemon..."} 
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-button-wrapper" ref={buttonRef} style={{ position: 'relative' }}>
        <Button
          text={"#"}
          handleAction={handleFilterChange}
        />
        
        {visible && (
          <SortCard 
            selected={sortBy} 
            onChange={onSortChange}
          />
        )}
      </div>
    </div>
  )
}