import React from 'react'
import SortOptions from '../molecules/SortOptions'
import Text from '../atoms/Text' 
import '../../styles/index.css';
export default function SortCard({ selected, onChange }) {
  return (
    <div  className="sort-card">
      <Text content="Sort by:" />
      <SortOptions selected={selected} onChange={onChange}/>
    </div >
  )
}