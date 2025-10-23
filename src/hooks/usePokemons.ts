import { useQuery } from "@apollo/client/react";
import { GET_POKEMON_BY_ID } from '../api/graphql/queries/getPokemonsById';
import { GET_POKEMONS } from '../api/graphql/queries/getPokemons';
import { PokemonType } from '../types/pokemon';
import { useMemo } from 'react';
import { useAppSelector } from "../app/hooks";

interface PokemonsData {
  pokemon_v2_pokemon: PokemonType[];
  pokemon_v2_pokemon_aggregate?: {
    aggregate: {
      count: number;
    };
  };
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
  const favorites = useAppSelector(state => state.favorites.list);
  
  // Construir las condiciones de búsqueda para GraphQL
  const where = useMemo(() => {
    if (!searchTerm) return {};
    
    // Si es un número, buscar por ID
    if (!isNaN(Number(searchTerm))) {
      return {
        id: { _eq: parseInt(searchTerm) }
      };
    }
    
    // Si es texto, buscar por nombre
    return {
      name: { _ilike: `%${searchTerm}%` }
    };
  }, [searchTerm]);

  // Construir el orden para GraphQL
  const orderBy = useMemo(() => {
    switch (sortBy) {
      case 'name':
        return [{ name: 'asc' }];
      case 'number':
      default:
        return [{ id: 'asc' }];
    }
  }, [sortBy]);

  const { data, loading, error } = useQuery<PokemonsData>(GET_POKEMONS, {
    variables: { 
      limit: sortBy === 'favorites' ? 1010 : itemsPerPage, // Cargar todos si es favoritos
      offset: sortBy === 'favorites' ? 0 : offset,
      where: where,
      order_by: orderBy
    },
  });

  const processedPokemons = useMemo(() => {
    if (!data?.pokemon_v2_pokemon) return [];

    let pokemons = [...data.pokemon_v2_pokemon];

    // Si el orden es por favoritos, ordenar manualmente
    if (sortBy === 'favorites') {
      pokemons = pokemons.filter(pokemon => 
        favorites.some(fav => fav.id === pokemon.id)
      );
      pokemons.sort((a, b) => a.id - b.id);
      
      // Aplicar paginación manual para favoritos
      const start = offset;
      const end = start + itemsPerPage;
      pokemons = pokemons.slice(start, end);
    }

    return pokemons;
  }, [data, sortBy, favorites, offset, itemsPerPage]);

  // Calcular el total de items para la paginación
  const totalCount = useMemo(() => {
    if (sortBy === 'favorites') {
      return favorites.length;
    }
    // Si hay búsqueda activa, retornar la cantidad de resultados
    if (searchTerm && data?.pokemon_v2_pokemon) {
      return data.pokemon_v2_pokemon.length;
    }
    return 1010; // Total de Pokémon
  }, [sortBy, searchTerm, favorites.length, data]);

  return {
    pokemons: processedPokemons, 
    loading,
    error,
    totalCount
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