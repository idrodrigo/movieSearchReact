export function mockMovies () {
  const mockMovies = [
    {
      Title: 'Pokémon: Detective Pikachu',
      Year: '2019',
      imdbID: 'tt5884052',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg'
    },
    {
      Title: 'Spider-Man: Across the Spider-Verse',
      Year: '1997–2023',
      imdbID: 'tt0168366',
      Type: 'series',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
    },
    {
      Title: 'The Batman',
      Year: '2022',
      imdbID: 'tt0190641',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg'
    },
    {
      Title: 'Pokémon the Movie 2000',
      Year: '1999',
      imdbID: 'tt0210234',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg'
    },
    {
      Title: 'Pokemon 4 ever',
      Year: '2000',
      imdbID: 'tt0235679',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTk0NzM3MDY1OV5BMl5BanBnXkFtZTYwNTkwODc5._V1_SX300.jpg'
    },
    {
      Title: 'The Lost World: Jurassic Park',
      Year: '1997',
      imdbID: 'tt0287635',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'
    },
    {
      Title: 'Pokémon the Movie: I Choose You!',
      Year: '2017',
      imdbID: 'tt6595896',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BM2U3NmI4YzItYmRiNi00M2UxLWExNTYtNDZkZmJlNzlmM2M3XkEyXkFqcGdeQXVyNDkzMjE0NDE@._V1_SX300.jpg'
    },
    {
      Title: 'Black Panther',
      Year: '2018',
      imdbID: 'tt0347791',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BODg3OTljOTktNmI3Ny00MDczLTk2NGItNWRiOTE2YjQ1OWI0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg'
    },
    {
      Title: 'Pokémon: Mewtwo Strikes Back - Evolution',
      Year: '2019',
      imdbID: 'tt8856470',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'
    },
    {
      Title: 'Pokémon: Lucario and the Mystery of Mew',
      Year: '2005',
      imdbID: 'tt0875609',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTUxOTcwNjAwMl5BMl5BanBnXkFtZTgwMjc2MzQ2NjE@._V1_SX300.jpg'
    }
  ]

  const mockMappedMovies = mockMovies?.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  })

  return mockMappedMovies
}
