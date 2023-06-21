import { useContext } from 'react'
import { FavoritesContext } from '../context/favorites.jsx'

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if (context === undefined) {
    throw new Error('useFavorite must be used within a FavoritesProvider')
  }
  return context
}
