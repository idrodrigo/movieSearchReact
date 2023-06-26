import EmptyMovies from './EmptyMovies'
import ListOfMovies from './ListOfMovies'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <EmptyMovies />
  )
}
