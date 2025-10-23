import { gql } from "@apollo/client";

export const GET_POKEMON_BY_ID = gql`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`;