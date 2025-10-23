import { useQuery } from "@apollo/client/react";
import {GET_POKEMON_BY_ID} from '../api/graphql/queries/getPokemonsById';
import {GET_POKEMONS} from '../api/graphql/queries/getPokemons';
import {PokemonType} from '../types/pokemon';

interface PokemonsData{
    pokemon_v2_pokemon: PokemonType[]; 
}

export const usePokemons =()=>{
    const {data, loading, error} = useQuery<PokemonsData>(GET_POKEMONS,{
        variables: {limit: 9, offset:0},
    });
    return{
        pokemons: data?.pokemon_v2_pokemon, 
        loading,
        error
    }
}
export const usePokemonById = (id: number) => {
  const { data, loading, error } = useQuery<PokemonsData>(GET_POKEMON_BY_ID, {
    variables: { id }, // ✅ Usa la variable correcta
    skip: !id, // ✅ Evita ejecutar la query si aún no tienes ID
  });

  return {
    pokemon: data?.pokemon_v2_pokemon[0],
    loading,
    error
  };
};
