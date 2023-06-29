// import { useId } from 'react'
import { lazy } from 'react'
import { FavIcon, RemoveFromFavIcon } from '../Icons.jsx'
import { useFavorites } from '../../hooks/useFavorites.js'
import './Favorites.css'

const ListOfMovies = lazy(() => import('../ListOfMovies.jsx'))

function NoFavorites () {
  return (
    <div className='noFavorites'>
      <p> Dobble click on a movie to add to favorites </p>
    </div>
  )
}

export default function Favorites () {
  // const cartCheckBoxId = useId()
  const { clearFav, favorites } = useFavorites()
  const hasMovies = favorites?.length > 0

  return (
        <>
            <section className='main-fav'>
            <FavIcon className='icon-fav' />
              {hasMovies ? <ListOfMovies movies={favorites} /> : <NoFavorites />}

                <button onClick={clearFav} className='delete-fav'>
                    <RemoveFromFavIcon />
                </button>
            </section>
        </>
  )
}
