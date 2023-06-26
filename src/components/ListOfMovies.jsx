import { useFavorites } from '../hooks/useFavorites'

export default function ListOfMovies ({ movies }) {
  const { addToFav, favorites, removeFromFav } = useFavorites()
  const checkProductInFav = (productId) => {
    return favorites.some((item) => item.id === productId)
  }
  return (
          <ul className="movies">
          {movies.map(movie => {
            const isProductInFav = checkProductInFav(movie.id)
            return (
             <li key={movie.id} className="movie" style={{ borderColor: isProductInFav ? 'red' : '' }} onDoubleClick={() => isProductInFav
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
