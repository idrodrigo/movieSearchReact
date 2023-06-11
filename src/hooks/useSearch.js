import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState()
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se ha ingresado un valor')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se permiten numeros')
      return
    }

    if (search.length < 3) {
      setError('Debe ingresar al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
