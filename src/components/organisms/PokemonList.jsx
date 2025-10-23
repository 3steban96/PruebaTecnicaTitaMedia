import { usePokemons } from '../../hooks/usePokemons'
import { useAppSelector } from '../../app/hooks'
import Card from '../molecules/Card'
import LoadingMessage from '../molecules/LoadingMessage';

export default function PokemonList({ sortBy, searchTerm, currentPage  }) {
  const { pokemons, loading, error } = usePokemons({ sortBy, searchTerm,    page: currentPage,
    itemsPerPage: 9 });
  const favorites = useAppSelector((state) => state.favorites.list);
  
  if (loading) return <LoadingMessage />;
  if (error) return <p>Error: {error.message}</p>;
  
  // Filtrar por favoritos si sortBy es 'favorites'
  const filteredPokemons = sortBy === 'favorites' 
    ? pokemons.filter(pokemon => favorites.some(fav => fav.id === pokemon.id))
    : pokemons;
  
  if (filteredPokemons.length === 0) {
    return (
      <div className="no-results">
        <p>
          {sortBy === 'favorites' 
            ? 'No tienes Pokémon favoritos aún.' 
            : 'No se encontraron Pokémon que coincidan con tu búsqueda.'}
        </p>
      </div>
    );
  }

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <Card 
          key={pokemon.id} 
          img={pokemon.pokemon_v2_pokemonsprites[0]?.sprites.front_default} 
          name={pokemon.name} 
          number={pokemon.id}
        />
      ))}  
    </div>
  )
}