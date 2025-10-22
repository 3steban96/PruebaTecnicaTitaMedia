import Button from '../atoms/Button'
import Input from '../atoms/Input'

export default function SearchBar() {
  return (
    <div className="search-bar">
        <div className="search-input-wrapper">
          <Input
              text={"Search Pokemon..."}
          />
        </div>
        <div className="search-button-wrapper">
          <Button
              text={"#"}
              handleAction={() => console.log('Filter button clicked')}
          />
        </div>
    </div>
  )
}
