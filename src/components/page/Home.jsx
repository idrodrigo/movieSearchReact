import { useEffect, useRef, useState } from 'react'

import { useMovies } from '../../hooks/useMovies'
import { useSearch } from '../../hooks/useSearch'

import Loader from '../Loader'
import { Movies } from '../Movies'

import { mockMovies } from '../../mocks/mockMovies'

import Marquee from '../Marquee'
import { styled } from 'styled-components'

const sortOptions = [
  { value: 'title', label: 'Title' },
  { value: 'year', label: 'Year' }
]

export default function Home () {
  const { search, updateSearch, error } = useSearch()
  const [selectedSortOption, setSelectedSortOption] = useState('')
  const { movies, getMovies, loading, debouncedGetMovies } = useMovies({ search, selectedSortOption })
  const mockMappedMovies = mockMovies()

  const inputRef = useRef()

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
      <HeaderHome>
        <Marquee />
        <FormSearch className='form' onSubmit={handleSubmit}>
          <div className='input-search'>
            <input onChange={handleChange} style={{
              border: `1px solid ${error ? 'red' : 'transparent'}`
            }} value={search} name='query' ref={inputRef} placeholder='Spider man, Pokemon, Avengers, ...' />

            {/* <button type='submit'>Search</button> */}
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
          {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        </FormSearch>
      </HeaderHome>

      <SectionHome className='main-home'>
        {/* peliculas */}
        {!search
          ? <><p>Search a movie!</p> <h4 className='favo'>Our Choice:</h4> <Movies movies={mockMappedMovies} /> </>
          : loading ? <> <Loader /> </> : <Movies movies={movies} />}
      </SectionHome>
    </>
  )
}

const FormSearch = styled.form`
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    padding: 0px 30px 0px 30px;

    .error {
        text-align: center;
        margin: 0;
    }

    .input-search {
      display: block;
      input {
        max-width: 100%;
        width: 100%;
      }
      @media only screen and (min-width: 600px) {
        flex-grow: 1;
      }
    }

    .sort {
    display: flex;
    justify-content: end;
    gap: 1rem;
    align-items: center;
    }

    @media only screen and (min-width: 600px) {
        display: flex;
        justify-content: center;
        padding: 0 25% 0 25%;
        gap: 2rem;
        align-items: center;
        flex-wrap: wrap;
    }
`
export const SectionHome = styled.section`
    min-height: 65vh;
    display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;

  h4 {
    color: var(--links);
  }
`
const HeaderHome = styled.header`
    min-height: 13vh;
    background-color: #f2f2f2;
    h1 {
        color: var(--links);
    }
`
