import { createContext, useReducer } from 'react'
import { favoritesInitialState, favoritesReducer } from '../reducers/favorites'
export const FavoritesContext = createContext()

function useFavoritesReducer () {
  const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState)

  const addToFav = (product) => {
    dispatch({ type: 'ADD_TO_FAV', payload: product })
  }

  const removeFromFav = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAV', payload: product })
  }

  const clearFav = () => {
    dispatch({ type: 'CLEAR_FAV' })
  }

  return { addToFav, removeFromFav, clearFav, state }
}

export function FavoritesProvider ({ children }) {
  const { addToFav, removeFromFav, clearFav, state } = useFavoritesReducer()
  return (
        <FavoritesContext.Provider value={{
          favorites: state,
          addToFav,
          removeFromFav,
          clearFav
        }}>
        {children}
        </FavoritesContext.Provider>
  )
}
