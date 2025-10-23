import React from 'react'
import iconLupa from '../../assets/lupa.png'
import Image from './Image'
export default function Input({ text, value, onChange }) {
  return (
    <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: '100%'}}>
        <Image 
            src={iconLupa}
            alt={"Lupa"}
            style={{width: '18px', height: '18px', position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.8}}
        />
        <input
          type="text"
          placeholder={text}
          style={{
            paddingLeft: '44px',
            height: 36,
            borderRadius: 20,
            border: 'none',
            width: '100%',
            backgroundColor: '#ffffff',
            outline: 'none',
            boxSizing: 'border-box',
            fontSize: 14
          }}
          value={value}
          onChange={onChange}
        />
    </div>
  )
}
