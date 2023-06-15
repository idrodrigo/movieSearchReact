import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'
import debounce from 'just-debounce-it'

export function useMovies ({ search, selectedSortOption }) {
  const [movies, setMovies] = useState([])
  const [errorMovies, setErrorMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef({ search })
  const abortController = useRef(null)

  const getMovies = useCallback(async ({ search }) => {
    if (prevSearch.current === search) return

    if (abortController.current) {
      abortController.current.abort() // Cancelar la búsqueda anterior
    }

    try {
      setLoading(true)
      setErrorMovies(null)
      prevSearch.current = search

      abortController.current = new AbortController() // Crear una nueva instancia de AbortController
      const signal = abortController.current.signal // Obtener la señal de cancelación

      const newMovies = await searchMovies({ search }, { signal })
      setMovies(newMovies)
    } catch (error) {
      setErrorMovies(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedGetMovies = useCallback(
    debounce(
      ({ search }) => {
        getMovies({ search })
      }, 600)
    , [getMovies])

  const sortedMovies = useMemo(() => {
    // console.log('memoSortedMovies')
    return selectedSortOption
      ? sortMovies(movies)
      : movies
  }, [movies, selectedSortOption])

  // Función para obtener el año de una cadena con formato de año
  function getYear (yearString) {
    // Verificar si el año tiene un guion
    if (yearString.includes('-')) {
    // Tomar el primer año antes del guion
      return parseInt(yearString.split('-')[0])
    } else {
    // Si no hay guion, parsear el año completo
      return parseInt(yearString)
    }
  }

  function sortMovies () {
    if (!movies) return
    if (!selectedSortOption) return movies
    if (selectedSortOption === 'title') {
      return [...movies]?.sort((a, b) => a.title.localeCompare(b.title))
    } else if (selectedSortOption === 'year') {
      return [...movies]?.sort((a, b) => {
        const yearA = getYear(a.year)
        const yearB = getYear(b.year)
        return yearA - yearB
      })
    }
  }

  return { movies: sortedMovies, getMovies, debouncedGetMovies, errorMovies, loading }
}
