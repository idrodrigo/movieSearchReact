import { NavLink, useParams } from 'react-router-dom'
import './Movie.css'
import { useEffect, useState } from 'react'
import { searchMovie } from '../../services/movies'
import Loader from '../Loader'
import { BsCaretLeftFill } from 'react-icons/bs'
import { IconAnchor } from '../Footer.jsx'
import { IconContext } from 'react-icons'

export default function Movie () {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)

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
          <IconAnchor $borderpx={'0'} $bghover={'#f2f2f2'}>
            <NavLink className='return' to={'/'}>
              <IconContext.Provider value={{ color: 'var(--links)', size: '2.5em' }}>
                <BsCaretLeftFill />
              </IconContext.Provider>
            </NavLink>
          </IconAnchor>
          <div key={movie.id} className='movie-card'>

            <div className="container">
              <div className='cover'>
                <img src={movie.poster} alt="cover" />
              </div>

              {/* <div className="description"> */}
              <div className='one'>
                <div className="title1">{movie?.title}
                  <div className='rated'>
                    <span>{movie?.rated}</span>
                  </div>
                </div>

                <div className="column1">
                  <span className="tag">Rating: {movie.imdbRating}</span>
                  <span className="tag">{movie?.year}</span>
                  <span className="tag">{movie?.gen}</span>
                </div>
              </div>

              <div className="two">

                <p className='plot'> {movie?.plot}</p>

                <div className="avatars">
                  <p href="#" data-tooltip="Person 1" data-placement="top">
                    Actors: {movie?.actors}
                  </p>

                  <p href="#" data-tooltip="Person 2" data-placement="top">
                    Director: {movie?.director}
                  </p>

                  <p href="#" data-tooltip="Person 3" data-placement="top">
                    Writer: {movie?.writer}
                  </p>

                </div>

              </div>

              <div className="tree">
                <IconAnchor
                  width={'6em'}
                  height={'1.8em'}
                  $bradio={'5px'}
                  $bcolor={'#00358A'}
                  $bghover={'#00358A'}>
                  <a href={`http://www.imdb.com/title/${movie.id}/`} target="_blank" rel="noopener noreferrer">
                    IMDB
                  </a>
                </IconAnchor>

                <IconAnchor
                  width={'11em'}
                  height={'1.8em'}
                  $bradio={'5px'}
                  $bcolor={'#00358A'}
                  $bghover={'#00358A'}>
                  <a href={movie?.tomato === 'N/A' ? '' : movie.tomato} target="_blank" rel="noopener noreferrer">
                    Rotten Tomatoes
                  </a>
                </IconAnchor>
              </div>

              {/* </div> */}

            </div>
          </div>

        </section>

        : <Loader />}

    </>
  )
}
