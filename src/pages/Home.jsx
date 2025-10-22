import Header from '../components/organisms/Header.jsx'
import PokemonList from '../components/organisms/PokemonList.jsx'
export default function Home() {
  return (
    <div>
        <Header/>
        <div >
            <PokemonList/>
        </div>
    </div>
  )
}
