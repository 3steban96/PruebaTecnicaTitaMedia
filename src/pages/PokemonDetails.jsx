import React from 'react'
import backgroundPokeball from '../assets/backgroundPokeball.png'
import arrowLeft from '../assets/arrowLeft.png'
import { usePokemonById } from '../hooks/usePokemons'
import Loading from '../components/organisms/Loading'
import { useParams, useNavigate } from 'react-router-dom'
import Image from '../components/atoms/Image'
import Text from '../components/atoms/Text'
import icon_height from '../assets/icon_ruler.png'
import icon_weight from '../assets/icon_weight.png'
import FavoriteButton from '../components/molecules/FavoriteButton'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFavorite, removeFavorite } from '../features/favoritesSlice';

export default function PokemonDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();  
  const {pokemon, loading, error} = usePokemonById(id);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.list);

  if(loading) return <Loading/>
  if(error) return <p>Error: {error.message}</p>
  
  const isFavorite = favorites.some(fav => fav.id === pokemon.id);
  
  const getTypeColor = (typeName) => {
    const colors = {
      grass: '#74CB48',
      poison: '#A43E9E',
      fire: '#F57D31',
      water: '#6493EB',
      electric: '#F9CF30',
      normal: '#AAA67F',
      bug: '#A7B723',
      flying: '#A891EC',
    };
    return colors[typeName?.toLowerCase()] || '#74CB48';
  };

  const primaryType = pokemon.pokemon_v2_pokemontypes[0]?.pokemon_v2_type.name;
  const backgroundColor = getTypeColor(primaryType);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(pokemon.id));
    } else {
      dispatch(addFavorite({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.pokemon_v2_pokemonsprites[0]?.sprites.front_default,
      }));
    }
  };

  return (
    <div className='page_pokemonDetails' style={{ backgroundColor }}>
      <div className="header-pokemon-details" style={{ backgroundColor }}>
        <div className="header-pokemon-details-content">
          <Image
            src={arrowLeft}
            alt="Arrow Left"
            className="arrow-left"
            onClick={() => navigate('/')}
          />
          <Text
            className="pokemon-name-details"
            content={pokemon.name}
          />
          <Text
            className="pokemon-number-details"
            content={`#${String(pokemon.id).padStart(3, '0')}`}
          />
        </div>
        <div className="pokeball-header-container">
          <Image
            src={backgroundPokeball}
            alt="Background Pokeball"
            className="pokeball-header"
          />
        </div>
      </div>
      
      <div className="pokemon-image-container" style={{ backgroundColor }}>
        <Image
          src={pokemon.pokemon_v2_pokemonsprites[0]?.sprites.front_default} 
          alt={pokemon.name}
          className="pokemon-image-details"
        />
      </div>

      <div className="pokemon-info-container">
        <div className="pokemon-types-container">
          {pokemon.pokemon_v2_pokemontypes.map((type, index) => (
            <span 
              key={index} 
              className={`pokemon-type-badge type-${type.pokemon_v2_type.name}`}
            >
              {type.pokemon_v2_type.name}
            </span>
          ))}
        </div>

        <div className="pokemon-subtitle-container">
          <Text
            className="pokemon-subtitle"
            content="About"
          />
        </div>
        
        <div className="pokemon-info-details">
          <div className='pokemon-detailsNot'>
            <Image
              src={icon_weight}
              alt="Weight Icon"
              className="icon-info"
            />
            <Text
              className="pokemon-info-text"
              content={`${pokemon.weight / 10} kg`}
            />
            <Text
              className="pokemon-info-label"
              content={'Weight'}
            />
          </div> 
          
          <div className='pokemon-details'>
            <Image
              src={icon_height}
              alt="Height Icon"
              className="icon-info"
            />
            <Text
              className="pokemon-info-text"
              content={`${pokemon.height / 10} m`}
            />
            <Text
              className="pokemon-info-label"
              content={'Height'}
            />
          </div>
          
          <div className='pokemon-details'>
            <Text
              className="pokemon-info-text"
              content={pokemon.pokemon_v2_pokemonmoves
                .slice(0, 2)
                .map((move) => move.pokemon_v2_move.name.replace('-', ' '))
                .join(', ')
              }
            />
            <Text
              className="pokemon-info-label"
              content={'Moves'}
            />
          </div>
        </div>

        {pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts?.[0] && (
          <div className="pokemon-description">
            <Text
              content={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text.replace(/\f/g, ' ')}
              className="pokemon-description-text"
            />
          </div>
        )}

        <div className="pokemon-subtitle-container">
          <Text
            className="pokemon-subtitle"
            content="Base Stats"
          />
        </div>

        <div className="pokemon-stats-container">
          {pokemon.pokemon_v2_pokemonstats.map((stat, index) => {
            const statNames = {
              'hp': 'HP',
              'attack': 'ATK',
              'defense': 'DEF',
              'special-attack': 'SATK',
              'special-defense': 'SDEF',
              'speed': 'SPD'
            };
            const maxStat = 255;
            const percentage = (stat.base_stat / maxStat) * 100;
            
            return (
              <div key={index} className="pokemon-stat-row">
                <Text
                  className="pokemon-stat-name"
                  content={statNames[stat.pokemon_v2_stat.name] || stat.pokemon_v2_stat.name}
                />
                <Text
                  className="pokemon-stat-value"
                  content={String(stat.base_stat).padStart(3, '0')}
                />
                <div className="pokemon-stat-bar-container">
                  <div 
                    className="pokemon-stat-bar" 
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor 
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="favorite-button-container">
          <FavoriteButton 
            className="favorite-button"            
            isFavorite={isFavorite}
            onClick={handleToggleFavorite}
          />
        </div>
      </div>
    </div>
  )
}