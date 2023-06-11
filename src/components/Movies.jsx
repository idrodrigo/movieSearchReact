import { useEffect, useState } from 'react'

function ListOfMovies ({ movies }) {
  return (
        <ul className="movies">
        {movies.map(movie => (
           <li key={movie.id} className="movie">
             <h3>{movie.title}</h3>
             <p> {movie.year}</p>
             <img src={movie.poster} alt={movie.Title} />
           </li>
        ))}
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
