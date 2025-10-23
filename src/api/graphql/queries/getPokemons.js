import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons(
    $limit: Int!
    $offset: Int!
    $where: pokemon_v2_pokemon_bool_exp
    $order_by: [pokemon_v2_pokemon_order_by!]
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $order_by
    ) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;