import React from 'react'

export default function Text({content, style}) {
  return (
    <div>
      <p style={style}>{content}</p>
    </div>
  )
}
