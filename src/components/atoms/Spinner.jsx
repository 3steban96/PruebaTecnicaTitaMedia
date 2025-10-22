import React from 'react';
import '../../styles/index.css';
import imgPokeball from '../../assets/icon-pokedex.png';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <img src={imgPokeball} alt="Loading..." className="spinner-image" />
    </div>
  );
}
