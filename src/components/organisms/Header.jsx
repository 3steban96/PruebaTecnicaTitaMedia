import React from 'react'
import Image from '../atoms/Image'
import NavBar from './NavBar'
import iconPokedex from '../../assets/icon-pokedex.png'

export default function Header() {
  return (  
    <div style={{padding: 16}}>
        <div >
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12}}>
                <Image 
                    src={iconPokedex}
                    alt={"Ditto"}
                    style={{width: 40, height: 40}}
                />
                <h1 style={{margin: 0, fontSize: 20}}>Pokédex</h1>
            </div>

            <div style={{marginTop: 12}}>
                <NavBar/>
            </div>
        </div>
    </div>
)
}
