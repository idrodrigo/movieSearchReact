import './App.css'

import { Suspense, lazy } from 'react'
// import { Router, Route } from 'rho-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FavoritesProvider } from './context/favorites'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loader from './components/Loader'

const LazyHomePage = lazy(() => import('./components/Home'))
const LazyFavoritesPage = lazy(() => import('./components/Favorites'))
const LazyPage404 = lazy(() => import('./components/Page404'))

export default function App () {
  return (
    <>
    <main>
      <Suspense fallback={<Loader />}>
        <FavoritesProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<LazyHomePage />} />
              <Route path='/favorites' element={<LazyFavoritesPage />} />
              <Route path='/*' element={<LazyPage404 />} />
            </Routes>
          </BrowserRouter>

          {/* <Nav />
          <Router defaultComponent={lazyPage404}>
            <Route path='/movieSearchReact/' Component={lazyHomePage} />
            <Route path='/movieSearchReact/favorites' Component={lazyFavoritesPage} />
          </Router> */}

        </FavoritesProvider>
        <Footer />
      </Suspense>
    </main>
    </>
  )
}
