export function mockMovies () {
  const mockMovies = [
    {
      Title: 'Spider-Man: Across the Spider-Verse',
      Year: '2023',
      imdbID: 'tt9362722',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg'
    },
    {
      Title: 'The Pursuit of Happyness',
      Year: '2006',
      imdbID: 'tt0454921',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg'
    },
    {
      Title: 'The Batman',
      Year: '2022',
      imdbID: 'tt1877830',
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
      Title: 'Joker',
      Year: '2019',
      imdbID: 'tt7286456',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
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
      imdbID: 'tt1825683',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'
    },
    {
      Title: 'The Flash',
      Year: '2023',
      imdbID: 'tt0439572',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg'
    },
    {
      Title: 'The Super Mario Bros. Movie',
      Year: '2023',
      imdbID: 'tt6718170',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg'
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
