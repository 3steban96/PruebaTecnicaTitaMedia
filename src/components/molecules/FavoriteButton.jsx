import Button from '../atoms/Button'
import iconHeart from '../../assets/heart.png'
import iconHeartFilled from '../../assets/heart_fill.png'
import Image from '../atoms/Image'
import '../../../src/styles/index.css'

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <Button 
      onClick={onClick}
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
    >
      <Image 
        src={isFavorite ? iconHeart :iconHeartFilled }
        className="favorite-icon" 
        alt="Favorite"
      />
    </Button>
  )
}