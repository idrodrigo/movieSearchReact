const API_KEY = import.meta.env.VITE_API_KEY

export async function searchMovies ({ search }, { signal }) {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`, { signal })
    const json = await response.json()
    const movies = json.Search
    const mappedMovies = movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    })

    return mappedMovies
  } catch (error) {
    throw new Error('Error searching movies')
  }
  //   finally {

  //   }
}

export async function searchMovie (imdbID) {
  if (imdbID === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full&tomatoes=true`)
    const json = await response.json()
    const movie = json

    const mappedMovies = movie && {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      rated: movie.Rated,
      imdbRating: movie.imdbRating,
      gen: movie.Genre,
      plot: movie.Plot,
      director: movie.Director,
      actors: movie.Actors,
      writer: movie.Writer,
      tomato: movie.tomatoURL
    }
    return mappedMovies
  } catch (error) {
    throw new Error('Error searching movie')
  }
  //   finally {

  //   }
}
