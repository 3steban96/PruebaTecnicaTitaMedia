import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '../../styles/index.css';

export default function Card({img, name, number}) {
  return (
    <div className="card">
      <div className="card-header">
        <Text content={number} className="card-number" />
      </div>
      <div className="card-type-container">
        <Image
          src={img}
          alt="Charmander"
          className="card-image"
        />
      </div>

      <div className="card-footer">
        <Text content={name} />
      </div>
    </div>
  );
}
