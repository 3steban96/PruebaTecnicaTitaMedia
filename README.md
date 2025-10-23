# PokeApi - Pokédex (Proyecto)

Pequeña aplicación React + Apollo GraphQL que muestra Pokémons usando la API pública de GraphQL de PokeAPI. Incluye paginado, búsqueda, ordenamiento y favoritos persistentes en localStorage.

## Tecnologías
- React 19 ([src/main.jsx](src/main.jsx))
- Vite ([vite.config.js](vite.config.js))
- Apollo Client ([src/api/graphql/client.js](src/api/graphql/client.js))
- Redux Toolkit para favoritos ([src/app/store.ts](src/app/store.ts), [`favoritesSlice`](src/features/favoritesSlice.ts))
- GraphQL queries: [getPokemons](src/api/graphql/queries/getPokemons.js), [getPokemonsById](src/api/graphql/queries/getPokemonsById.js)
- TypeScript types mínimos en [src/types/pokemon.ts](src/types/pokemon.ts)

## Scripts
Ver [package.json](package.json)
- npm run dev — servidor de desarrollo
- npm run build — generar build de producción
- npm run preview — previsualizar build

## Estructura principal (resumen)
- index.html — punto de entrada
- vite.config.js — config de Vite
- src/
  - main.jsx — montaje de la app y providers (Redux, Apollo, Router) ([src/main.jsx](src/main.jsx))
  - App.jsx — rutas principales ([src/App.jsx](src/App.jsx))
  - router/routes.tsx — rutas definidas ([src/router/routes.tsx](src/router/routes.tsx))
  - pages/
    - [Home.jsx](src/pages/Home.jsx) — listado y controles
    - [PokemonDetails.jsx](src/pages/PokemonDetails.jsx) — vista detalle
  - hooks/
    - [`usePokemons`](src/hooks/usePokemons.ts) — hook para listar y filtrar Pokémons
    - [`usePokemonById`](src/hooks/usePokemons.ts) — obtener detalle por id
  - api/graphql/
    - [client.js](src/api/graphql/client.js) — Apollo client
    - queries/
      - [getPokemons.js](src/api/graphql/queries/getPokemons.js)
      - [getPokemonsById.js](src/api/graphql/queries/getPokemonsById.js)
  - app/
    - [store.ts](src/app/store.ts) — configuración del store y persistencia en localStorage
    - [hooks.ts](src/app/hooks.ts) — tipos para useSelector/useDispatch
  - features/
    - [`favoritesSlice`](src/features/favoritesSlice.ts) — actions: [`addFavorite`](src/features/favoritesSlice.ts), [`removeFavorite`](src/features/favoritesSlice.ts)
  - components/
    - atoms/ — componentes atómicos (Button, Image, Text, Spinner, etc.)
    - molecules/ — Card, FavoriteButton, SearchBar, PaginationControls, ...
    - organisms/ — Header, NavBar, PokemonList, Pagination, Loading, SortCard
  - styles/
    - [index.css](src/styles/index.css) — estilos globales

## Flujos clave
- Obtención de lista: [`usePokemons`](src/hooks/usePokemons.ts) usa la query [`GET_POKEMONS`](src/api/graphql/queries/getPokemons.js).
- Detalle: [`usePokemonById`](src/hooks/usePokemons.ts) usa [`GET_POKEMON_BY_ID`](src/api/graphql/queries/getPokemonsById.js).
- Favoritos: dispatch a [`addFavorite`](src/features/favoritesSlice.ts) / [`removeFavorite`](src/features/favoritesSlice.ts); estado guardado en localStorage vía [src/app/store.ts](src/app/store.ts).

## Cómo ejecutar (rápido)
1. Instalar dependencias:
```sh
npm install
```
2. Levantar servidor de desarrollo:
```sh
npm run dev
```
Abrir http://localhost:5173 (por defecto)

## Notas
- Puntos importantes: la persistencia se maneja en [src/app/store.ts](src/app/store.ts) (localStorage key: `pokemonFavorites`).
- Rutas principales están en [src/router/routes.tsx](src/router/routes.tsx) y en el enrutado de [src/App.jsx](src/App.jsx).
