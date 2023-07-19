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
      <FavIcon className='icon-fav' />
      <p> Dobble click on a movie to add to favorites </p>
    </div>
  )
}

export default function Favorites () {
  // const cartCheckBoxId = useId()
  const { clearFav, favorites } = useFavorites()
  const hasMovies = favorites?.length > 0
  const handleClick = () => {
    if (confirm('Please confirm you want to delete your favorites list.')) {
      return clearFav()
    }
  }

  return (
    <>
      <FavSection>

        {hasMovies
          ? <>
          <ListOfMovies movies={favorites} />
            <IconAnchor width={'5em'} height={'3em'} $bradio={'10px'}>
              <button onClick={handleClick}>
                <IconContext.Provider value={{ color: '#1ED760', size: '1.7em' }}>
                  <BsTrashFill />
                </IconContext.Provider>
              </button>
            </IconAnchor>
            </>
          : <NoFavorites />}

      </FavSection>
    </>
  )
}

const FavSection = styled(SectionHome)`
  min-height: 76vh;
  .noFavorites{
    text-align: center;
  }

  button {
  padding: 0;
  margin: 0;
  margin-bottom: 3rem;
}
`
