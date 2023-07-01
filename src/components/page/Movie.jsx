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
                    <div key={movie.imdbID}>

                        <div className="movie-card">

                            <div className="container">
                                <div className='cover'>
                                    <img src={movie.Poster} alt="cover" />
                                </div>

                                {/* <div className="description"> */}
                                <div className='one'>
                                    <div className="title1">{movie?.Title}
                                        <div className='rated'>
                                            <span>{movie?.Rated}</span>
                                        </div>
                                    </div>

                                    <div className="column1">
                                        <span className="tag">Rating: {movie.imdbRating}</span>
                                        <span className="tag">{movie?.Year}</span>
                                        <span className="tag">{movie?.Genre}</span>
                                    </div>
                                </div>

                                <div className="two">

                                    <p className='plot'> {movie?.Plot}</p>

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

                                <div className="tree">
                                    <a href={`http://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noopener noreferrer">
                                        IMDB
                                    </a>

                                    <a href={movie?.tomatoURL === 'N/A' ? '' : movie.tomatoURL} target="_blank" rel="noopener noreferrer">
                                        Rotten Tomatoes
                                    </a>
                                </div>

                                {/* </div> */}

                            </div>
                        </div>
                    </div>

                </section>

              : <h2>loading...</h2>}

        </>
  )
}
