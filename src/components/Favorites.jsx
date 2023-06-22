import './Favorites.css'

import { useId } from 'react'
import { FavIcon, RemoveFromFavIcon } from './Icons.jsx'
import { useFavorites } from '../hooks/useFavorites'

function FavItem (movie) {
  const { removeFromFav } = useFavorites()
  console.log(movie)
  return (
   <li key={movie.id} className="movie" onDoubleClick={() => removeFromFav(movie)}>
     <h3>{movie.title}</h3>
     <p> {movie.year}</p>
     <img src={movie.poster} alt={movie.Title} />
   </li>
  )
}
export function Favorites () {
  const cartCheckBoxId = useId()
  const { clearFav, favorites } = useFavorites()
  const hasMovies = favorites?.length > 0

  return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}>
                <FavIcon />
            </label>
            <input className='fav' id={cartCheckBoxId} type="checkbox" hidden />

            <aside className='cart' >
                <ul className='movies'>
                    {
                      hasMovies
                        ? favorites.map((movie) => {
                          return (

                        <FavItem
                        movie={favorites}
                        key={movie.id}
                        {...movie} />
                          )
                        })
                        : <h6 style={{ color: '#00FF66' }} >
                      dobble click on movie to add to favorites
                    </h6>
                }
                </ul>

                <button onClick={clearFav}>
                    <RemoveFromFavIcon />
                </button>
            </aside>
        </>
  )
}
