import React from 'react'

export default function Button({text, handleAction}) {
  return (
    <button 
      onClick={handleAction}
      style={{
        width: 36,
        height: 36,
        padding: 0,
        borderRadius: '50%',
        color: '#DC0A2D',
        border: '1px solid rgba(255,255,255,0.9)',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600
      }}
    >
      {text}
    </button>
  )
}
