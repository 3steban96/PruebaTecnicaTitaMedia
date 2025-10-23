import React from 'react'
import Button from './Button'

export default function PageNumber({number,active, onClick}) {
  return (
    <div>
        <Button
            text={number}
            className={`page-number ${active ? 'active' : ''}`}
            onClick={()=>onClick(number)}
        />
    </div>
  )
}
