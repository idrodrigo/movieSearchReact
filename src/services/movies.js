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

    //   const mappedMovies = movie?.map(movie => {
    //     return {
    //       id: movie.imdbID,
    //       title: movie.Title,
    //       year: movie.Year,
    //       poster: movie.Poster
    //     }
    //   })
    return movie
  } catch (error) {
    throw new Error('Error searching movie')
  }
  //   finally {

  //   }
}
