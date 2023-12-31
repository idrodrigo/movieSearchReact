import { styled } from 'styled-components'

const marquee = [
  'The best movies search online',
  'Add movies to your favorites list',
  'Search your favorites movies',
  'Enjoy an easy and fast movie search',
  'Discover new movies to watch',
  'Search movies by title or year',
  'Organize your favorite movies in one place',
  'Access a wide variety of movies online',
  'Immerse yourself in the world of cinema with just a few clicks',
  'Discover hidden gems in our movie library'
]
export default function Marquee () {
  return (
    <HomeMarquee >
      <marquee>
        <div>
          {
            marquee.map((item, index) => (
              <small key={index}>{item}</small>
            ))
          }
        </div>
      </marquee>
    </HomeMarquee>
  )
}

const HomeMarquee = styled.div`
div{
  padding-top: 1vh;
  color: var(--links);
  display: flex;
  gap: 10rem;
  width: 100vw;
}
`
