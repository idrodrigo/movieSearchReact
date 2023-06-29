import { useFavorites } from '../hooks/useFavorites'
import { SearchIcon } from './Icons'
import { Link } from 'react-router-dom'

export default function ListOfMovies ({ movies }) {
  const { addToFav, favorites, removeFromFav } = useFavorites()

  const checkProductInFav = (productId) => {
    return favorites.some((item) => item.id === productId)
  }

  // function handleClick (imdbID) {
  //   return () => {
  //     window.location.href = `/movie/${imdbID}`
  //   }
  // }

  function handleDoubleClick (movie, isProductInFav) {
    return () => {
      isProductInFav
        ? removeFromFav(movie)
        : addToFav(movie)
    }
  }

  return (
          <ul className="movies">
          {movies.map(movie => {
            const isProductInFav = checkProductInFav(movie.id)
            return (
             <li key={movie.id} className="movie"
                 style={{ borderColor: isProductInFav ? 'red' : '' }}
                 onDoubleClick={handleDoubleClick(movie, isProductInFav)}
                 >
               <h3>{movie.title}</h3>
               <p> {movie.year}</p>
               <img src={movie.poster} alt={movie.Title} />
               <button>
                <Link to={`/movie/${movie.id}`}>
                <SearchIcon /></Link></button>
             </li>
            )
          })}
          </ul>
  )
}
