import { useQuery } from "@apollo/client/react";
import { GET_POKEMON_BY_ID } from '../api/graphql/queries/getPokemonsById';
import { GET_POKEMONS } from '../api/graphql/queries/getPokemons';
import { PokemonType } from '../types/pokemon';
import { useMemo } from 'react';
import { useAppSelector } from "../app/hooks";

interface PokemonsData {
  pokemon_v2_pokemon: PokemonType[]; 
}

interface UsePokemonsParams {
  sortBy?: string;
  searchTerm?: string;
  page?: number;
  itemsPerPage?: number;
}

export const usePokemons = ({ 
  sortBy = 'number', 
  searchTerm = '',
  page = 1,
  itemsPerPage = 9
}: UsePokemonsParams = {}) => {
  const offset = (page - 1) * itemsPerPage;
  
  const { data, loading, error } = useQuery<PokemonsData>(GET_POKEMONS, {
    variables: { 
      limit: itemsPerPage, 
      offset: offset 
    },
  });

  const favorites = useAppSelector(state => state.favorites.list);

  const filteredAndSortedPokemons = useMemo(() => {
    if (!data?.pokemon_v2_pokemon) return [];

    let pokemons = [...data.pokemon_v2_pokemon];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      pokemons = pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString().includes(searchTerm)
      );
    }

    // Ordenar según la opción seleccionada
    switch (sortBy) {
      case 'name':
        pokemons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'number':
        pokemons.sort((a, b) => a.id - b.id);
        break;
      case 'favorites':
        pokemons.sort((a, b) => {
          const aIsFav = favorites.some(fav => fav.id === a.id);
          const bIsFav = favorites.some(fav => fav.id === b.id);
          if (aIsFav && !bIsFav) return -1;
          if (!aIsFav && bIsFav) return 1;
          return a.id - b.id;
        });
        break;
      default:
        pokemons.sort((a, b) => a.id - b.id);
    }

    return pokemons;
  }, [data, sortBy, searchTerm, favorites]);

  return {
    pokemons: filteredAndSortedPokemons, 
    loading,
    error
  };
};

export const usePokemonById = (id: number) => {
  const { data, loading, error } = useQuery<PokemonsData>(GET_POKEMON_BY_ID, {
    variables: { id },
    skip: !id,
  });

  return {
    pokemon: data?.pokemon_v2_pokemon[0],
    loading,
    error
  };
};