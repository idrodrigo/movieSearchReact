import { useEffect, useState } from 'react'
import { useFavorites } from '../hooks/useFavorites'

function ListOfMovies ({ movies }) {
  const { addToFav, favorites, removeFromFav } = useFavorites()
  const checkProductInFav = (productId) => {
    return favorites.some((item) => item.id === productId)
  }
  return (
        <ul className="movies">
        {movies.map(movie => {
          const isProductInFav = checkProductInFav(movie.id)
          return (
           <li key={movie.id} className="movie" style={{ backgroundColor: isProductInFav ? 'red' : '' }} onDoubleClick={() => isProductInFav
             ? removeFromFav(movie)
             : addToFav(movie)}>
             <h3>{movie.title}</h3>
             <p> {movie.year}</p>
             <img src={movie.poster} alt={movie.Title} />
           </li>
          )
        })}
        </ul>
  )
}

function EmptyListOfMovies () {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {showMessage && <p> Movie not found! </p>}
    </>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <EmptyListOfMovies />
  )
}
