export interface PokemonType {
    id: number;
    name: string;
    height: number;
    weight: number;
    imgUrl: string;
    stats:{
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    }
    moves: string[];
    types: string[];
}
export interface FavoritePokemon {
    id: number;
    name: string;
    imgUrl: string;
}