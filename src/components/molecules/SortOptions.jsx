import React from 'react'
import RadioButton from '../atoms/RadioButton'

export default function SortOptions({ selected, onChange }) {
  return (
    <div className="sort-options">
      <RadioButton label="Number" value="number" checked={selected === 'number'} onChange={onChange} />
      <RadioButton label="Name" value="name" checked={selected === 'name'} onChange={onChange} />
      <RadioButton label="Favorites" value="favorites" checked={selected === 'favorites'} onChange={onChange} />
    </div>
  )
}
