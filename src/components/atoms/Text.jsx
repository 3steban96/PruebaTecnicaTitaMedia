import React from 'react'

export default function Text({content, className}) {
  return (
    <div>
      <p className={className}>{content}</p>
    </div>
  )
}
