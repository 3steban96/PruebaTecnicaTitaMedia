import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '../../styles/index.css';

export default function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <Text content="#004" className="card-number" />
      </div>
      <div className="card-type-container">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
          className="card-image"
        />
      </div>

      <div className="card-footer">
        <Text content="Charmander" />
      </div>
    </div>
  );
}
