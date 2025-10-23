import React, { useState } from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '../../styles/index.css';
import {useNavigate} from 'react-router-dom';
export default function Card({img, name, number}) {
  const [select, setSelect] = useState(false);
  const navigate = useNavigate();
  const handleSelectPokemon=()=>{
    setSelect(!select);
    navigate(`/pokemon/${number}`);
    console.log("Pokemon seleccionado:", number);
  }
  return (
    <div className="card" onClick={handleSelectPokemon}>
      <div className="card-header">
        <Text content={`#`+number} className="card-number" />
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
