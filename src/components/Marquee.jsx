import './Marquee.css'

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
        <marquee >
            <div className="marquee">
                {
                    marquee.map((item, index) => (
                        <small key={index}>{item}</small>
                    ))
                }
            </div>
        </marquee>
  )
}
