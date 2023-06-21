export const favoritesInitialState = JSON.parse(window.localStorage.getItem('favorites')) || []

export const updateFavoritesInLocalStorage = (fav) => {
  window.localStorage.setItem('favorites', JSON.stringify(fav))
}

export const CART_ACTION_TYPES = {
  ADD_TO_FAV: 'ADD_TO_FAV',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
  CLEAR_FAV: 'CLEAR_FAV'
}

export const favoritesReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_FAV: {
      const productInFavIndex = state.findIndex(item => item.id === actionPayload.id)

      if (productInFavIndex >= 0) {
        const newState = [
          ...state.slice(0, productInFavIndex),
          { ...state[productInFavIndex], quantity: state[productInFavIndex].quantity + 1 },
          ...state.slice(productInFavIndex + 1)
        ]

        updateFavoritesInLocalStorage(newState)
        return newState
      }
      const newState = [...state, { ...actionPayload, quantity: 1 }]
      updateFavoritesInLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_FAV: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateFavoritesInLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_FAV: {
      updateFavoritesInLocalStorage([])
      return []
    }
  }
  return state
}
