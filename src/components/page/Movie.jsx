import { NavLink, useParams } from 'react-router-dom'
import './Movie.css'
import { useEffect, useState } from 'react'
import { searchMovie } from '../../services/movies'

export default function Movie () {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState({})

  async function getMovie (imdbID) {
    try {
      const newMovie = await searchMovie(imdbID)
      setMovie(newMovie)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovie(imdbID)

    // return () => {
    //   second
    // }
  }, [imdbID])

  return (
        <>
            {movie
              ? <section className='main-movie'>
                    <NavLink className='return' to={'/'}>Back to home</NavLink>
                    <button >add fav</button>
                    <div key={movie.imdbID}>
                        <div>
                            <div className="movie-card">

                                <div className="container">

                                    <img src={movie.Poster} alt="cover" className="cover" />

                                    <div className="hero">

                                        <div className="details">

                                            <div className="title2">{ }</div>

                                        </div>

                                    </div>

                                    <div className="description">
                                        <div className="title1">{movie?.Title} <span className='rated'>{movie?.Rated}</span></div>

                                        <div className="column1">
                                            <span className="tag">Rating: {movie.imdbRating}</span>
                                            <span className="tag">{movie?.Year}</span>
                                            <span className="tag">{movie?.Genre}</span>
                                        </div>

                                        <div className="column2">

                                            <p> {movie?.Plot}</p>

                                            <div className="avatars">
                                                <p href="#" data-tooltip="Person 1" data-placement="top">
                                                    Actors: {movie?.Actors}
                                                </p>

                                                <p href="#" data-tooltip="Person 2" data-placement="top">
                                                    Director: {movie?.Director}
                                                </p>

                                                <p href="#" data-tooltip="Person 3" data-placement="top">
                                                    Writer: {movie?.Writer}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="urls">
                                            <a href={`http://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noopener noreferrer">
                                                IMDB
                                            </a>

                                            <a href={movie?.tomatoURL === 'N/A' ? '' : movie.tomatoURL} target="_blank" rel="noopener noreferrer">
                                                Rotten Tomatoes
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

              : <h2>loading...</h2>}

        </>
  )
}
