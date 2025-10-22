import { usePokemons } from '../../hooks/usePokemons'
import Card from '../molecules/Card'
import LoadingMessage from '../molecules/LoadingMessage';

export default function PokemonList() {
  const {pokemons, loading, error} = usePokemons();
  console.log("data",pokemons);
  if (loading) return <LoadingMessage />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon)=>(
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
