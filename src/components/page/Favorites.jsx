// import { useId } from 'react'
import { lazy } from 'react'
import { FavIcon, RemoveFromFavIcon } from '../Icons.jsx'
import { useFavorites } from '../../hooks/useFavorites.js'
import { styled } from 'styled-components'
import { SectionHome } from '../page/Home.jsx'

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
      <FavSection>
        <FavIcon className='icon-fav' />
        {hasMovies ? <ListOfMovies movies={favorites} /> : <NoFavorites />}
        <button onClick={clearFav}>
          <RemoveFromFavIcon />
        </button>
      </FavSection>
    </>
  )
}

const FavSection = styled(SectionHome)`
    min-height: 75vh;
    text-align: center;
    button {
    margin-bottom: 3rem;
    svg {
        margin: 2rem;
    }
}
`
