import { useEffect, useState } from 'react'

export default function EmptyMovies () {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
      <>
      {showMessage && <p className='noFound'> Movie not found! </p>}
      </>
  )
}
