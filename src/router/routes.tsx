import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';

export const routes = [
    {path: '/', element: <Home />},
    {path: '/pokemon/:id', element: <PokemonDetails />},
];