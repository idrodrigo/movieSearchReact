// import { useId } from 'react'
import { lazy } from 'react'
import { FavIcon } from '../Icons.jsx'
import { useFavorites } from '../../hooks/useFavorites.js'
import { styled } from 'styled-components'
import { SectionHome } from '../page/Home.jsx'
import { IconAnchor } from '../Footer.jsx'
import { BsTrashFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'

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
        <IconContext.Provider value={{ color: '#0f6dff', size: '1.7em' }}>
          <IconAnchor width={'5em'} height={'3em'} $bradio={'10px'}>
            <button onClick={clearFav}>
              <BsTrashFill />
            </button>
          </IconAnchor>
        </IconContext.Provider>
      </FavSection>
    </>
  )
}

const FavSection = styled(SectionHome)`
    min-height: 77vh;
    button {
      padding: 0;
      margin: 0;
      margin-bottom: 3rem;
    /* svg {
        margin: 2rem;
    } */
}
`
