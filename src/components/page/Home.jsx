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

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <HeaderHome>
        <Marquee />

        <FormSearch className='form' onSubmit={handleSubmit}>
          <div className='input-search'>
            <InputSearch
              onChange={handleChange}
              style={{ border: `1px solid ${error ? 'red' : 'transparent'}` }}
              value={search}
              name='query'
              ref={inputRef}
              placeholder='Spider man, Pokemon, Avengers, ...' />

          </div>
          <div className='sort'>
            <label>Filters:</label>
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
          ? <>
            <p> Dobble click on a movie to add or remove to favorites</p>
            <h4 className='favo'>Our Choice:</h4>
            <Movies movies={mockMappedMovies} />
          </>
          : loading ? <> <Loader /> </> : <Movies movies={movies} />}
      </SectionHome>
    </>
  )
}

const FormSearch = styled.form`
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    padding: 0px 30px 0px 30px;
    select{
      border: 1px solid #1ED760;
    }
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
  p{
    margin: 0;
    padding: 0;
    color: var(--links);
  }
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

const InputSearch = styled.input`
  width: 100%;
  padding-left: 3rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.625rem 0.75rem;
  background-size: 1rem;
  position: relative;
`
