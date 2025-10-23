import Header from '../components/organisms/Header.jsx'
import PokemonList from '../components/organisms/PokemonList.jsx'

export default function Home() {
  return (
    <div className='page_home'>
        <Header/>
        <div >
            <PokemonList/>
        </div>
    </div>
  )
}
