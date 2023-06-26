import { useEffect, useRef, useState } from 'react'

import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'

import Loader from '../components/Loader'
import { Movies } from '../components/Movies'

import { mockMovies } from '../mocks/mockMovies'

import './Home.css'

const sortOptions = [
  { value: 'title', label: 'Title' },
  { value: 'year', label: 'Year' }
]

export default function Home () {
  const inputRef = useRef()
  // const [query, setQuery] = useState('')
  const [selectedSortOption, setSelectedSortOption] = useState('')
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading, debouncedGetMovies } = useMovies({ search, selectedSortOption })

  const mockMappedMovies = mockMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const { query } = Object.fromEntries(new window.FormData(event.target))
    // console.log({ search })
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouncedGetMovies({ search: newQuery })
  }

  const handleSortChange = (event) => {
    const selectedValue = event.target.value
    setSelectedSortOption(selectedValue)
  }

  useEffect(() => {
    search
      ? document.title = `You've Searched ${search}`
      : document.title = 'Movies Search'

    const favicon = document.getElementById('favicon')

    search
      ? favicon.href = './popcorn.svg'
      : favicon.href = './movies.svg'

    // return () => {
    //   second
    // }
  }, [search])
  return (
      <>
        <header>
          <form className='form' onSubmit={handleSubmit}>
            <div className='search'>
            <input onChange={handleChange} style={{
              border: `1px solid ${error ? 'red' : 'transparent'}`
            }} value={search} name='query' ref={inputRef} placeholder='Spider man, Pokemon, Avengers, ...'/>

              <button type='submit'>Search</button>
            </div>
            <div className='sort'>
            <label>Sort by:</label>
            <select value={selectedSortOption} onChange={handleSortChange}>
            <option value="">None</option>
            {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
            ))}
            </select>
            </div>
          </form>

          {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        </header>

        <section className='main-home'>
            {/* peliculas */}
            {!search
              ? <><p>Search a movie!</p> <h4 className='favo'>Our Choice:</h4> <Movies movies={ mockMappedMovies }/> </>
              : loading ? <> <Loader /> </> : <Movies movies={movies}/>}
        </section>
      </>
  )
}
