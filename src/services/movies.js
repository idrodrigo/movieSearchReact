const API_KEY = '336d4a9d'

export async function searchMovies ({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
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
