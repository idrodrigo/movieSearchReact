import styled from 'styled-components'
import { useFavorites } from '../hooks/useFavorites'
import { FavIcon } from './Icons'
import { NavLink } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { IconAnchor } from './Footer.jsx'
import { IconContext } from 'react-icons'
import { BiSolidRightArrow } from 'react-icons/bi'

export default function ListOfMovies ({ movies }) {
  const { addToFav, favorites, removeFromFav } = useFavorites()

  const checkProductInFav = (productId) => {
    return favorites.some((item) => item.id === productId)
  }

  // function handleClick (imdbID) {
  //   return () => {
  //     window.location.href = `/movie/${imdbID}`
  //   }
  // }

  function handleDoubleClick (movie, isProductInFav) {
    return () => {
      if (isProductInFav) {
        removeFromFav(movie)
      } else {
        confetti({
          particleCount: 100,
          spread: 1000
        })
        addToFav(movie)
      }
    }
  }

  return (
    <UlMovies>
      {movies.map(movie => {
        const isProductInFav = checkProductInFav(movie.id)
        return (
          <LiMovie key={movie.id} className="movie"
            onDoubleClick={handleDoubleClick(movie, isProductInFav)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p> {movie.year}</p>
            <FavIconDiv>
              {isProductInFav
                ? <FavIcon />
                : null
              }
            </FavIconDiv>
            <IconContext.Provider value={{ color: '', size: '1.5em' }}>
            <InfoButton width={'3.5em'} height={'3.5em'} $bcolor={'#1ED760'}>
              <NavLink to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}> <BiSolidRightArrow /> </NavLink>
            </InfoButton>
            </IconContext.Provider>
          </LiMovie>
        )
      })}
    </UlMovies>
  )
}

const UlMovies = styled.ul`
  cursor: default;
  padding: 0;
  padding-bottom: 2rem;
  width: 60vw;
  list-style: none;
  margin: 0;
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
  align-items: last baseline;
  border: 2px solid #f2f2f2;
  @media(min-width: 768px){
    gap: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
const LiMovie = styled.li`
  position: relative;
  transition: all 0.6s ease-in-out;
  color: black;
  padding: 0.3rem;
  padding-bottom: 0.5rem;
  cursor: default;
  border: 2px solid #f2f2f2;
  border-radius: 0.8rem;
  max-width: 180px;
  max-height: 425px;
  overflow: hidden;

  @media(min-width: 768px){
    max-width: 250px;
    padding: 1rem;
  }

  img {
    @media(min-width: 768px){
      min-width: 180px;
      min-height: 260px;
    }
    min-width: 166px;
    min-height: 240px;
    cursor: default;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 6px #222;
  }

  h3,p {
    margin: 0;
    max-width: 250px;
    cursor: default;
    position: block;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    position: relative;
    transition: all 1s ease-in-out;
  }

  h3 {
    color: var(--links);
    top: 80%;
    left: 0;
  }

  p {
    top: 87%;
    left: 0%
  }
  `

const InfoButton = styled(IconAnchor)`
    opacity: .01;
    position: absolute;
    top: 55%;
    left: 95%;
  > *{
    box-shadow: 2px 5px 6px rgba(0, 0, 0, 1);
    background-color: #1ED760;
    @media(max-width: 768px){
      width: 3em;
      height: 3em;
      svg{
        width: 1.2em;
        height: 1.2em;
      }
    }
    &:hover {
      background-color: #1ED760;
      transition: all 0.4s ease-in-out;
    }
  }

 ${LiMovie}:hover & {
   top: 55%;
   left: 55%;
   opacity: 1;
   transition: all .8s ease;
   /* @media(max-width: 768px){
    top: 50%;
    left: 50%;
  } */
 }
 &:hover {
   scale: 1.07;
 }
  `
// const InfoButton = styled.button`
// height: 3.5rem;
// width: 3.5rem;
// cursor: pointer;
// background-color: #1ED760;
// font-size: larger;
// position: absolute;
// top: 55%;
// left: 120%;
// opacity: 0.1;
// border: 0;
// border-radius: 100%;
// box-shadow: 2px 5px 6px rgba(0, 0, 0, 1);
// margin: 0;
// padding: 0;
// text-align: center;
// overflow: hidden;

// ${LiMovie}:hover & {
//   top: 55%;
//   left: 60%;
//   opacity: 1;
//   transition: all .8s ease;

// }
// &:hover {
//   scale: 1.07;
// }
// `
const FavIconDiv = styled.div`
cursor: default;
position: absolute;
top: 50%;
left: 50%;
margin: -50px 0 0 -25px;
opacity: 0.7;
`
