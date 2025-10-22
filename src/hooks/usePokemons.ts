import { useQuery } from "@apollo/client/react";
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