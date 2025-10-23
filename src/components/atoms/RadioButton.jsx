import React from 'react'
import Text from './Text'
import '../../styles/index.css';

export default function RadioButton({label, value, checked, onChange}) {
  return (
    <div className="radio-button">
        <input type="radio" name="sort" value={value} checked={checked} onChange={onChange}/>
        <Text 
        className="radio-label"
        content={label} />
    </div>
  )
}
