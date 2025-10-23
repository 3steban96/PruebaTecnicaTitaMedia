import { useState } from 'react';
import Header from '../components/organisms/Header.jsx'
import PokemonList from '../components/organisms/PokemonList.jsx'
import Pagination from '../components/organisms/Pagination.jsx';

export default function Home() {
  const [sortBy, setSortBy] = useState('number');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 9;
  const totalItems = 1010; // Total de Pokémon (puedes ajustar este número)

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1); // Resetear a la primera página al cambiar el orden
  };

  const handleSearchChange = (term) => {
    const cleanedTerm = term.replace(/[^a-zA-Z0-9\s]/g, '');
    if (cleanedTerm.length >= 3 || cleanedTerm.length === 0) {
      setSearchTerm(cleanedTerm);
      setCurrentPage(1); // Resetear a la primera página al buscar
    } else if (cleanedTerm.length > 0) {
      setSearchTerm('');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='page_home'>
        <Header
            handleSortChange={handleSortChange}
            handleSearchChange={handleSearchChange}
        />
        <div>
          <PokemonList 
            sortBy={sortBy}
            searchTerm={searchTerm}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onChangePage={handlePageChange}
          currentPage={currentPage}
        />
    </div>
  )
}