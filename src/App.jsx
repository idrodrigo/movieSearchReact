import './App.css'

import { Suspense, lazy } from 'react'
// import { Router, Route } from 'rho-router'
import { Routes, Route } from 'react-router-dom'

import { FavoritesProvider } from './context/favorites'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import { Movies } from './components/Movies'
import { mockMovies } from './mocks/mockMovies'

const LazyHomePage = lazy(() => import('./components/page/Home'))
const LazyFavoritesPage = lazy(() => import('./components/page/Favorites'))
const LazyPage404 = lazy(() => import('./components/page/Page404'))
const LazyMoviePage = lazy(() => import('./components/page/Movie'))

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LazyHomePage />
//   },
//   {
//     path: '/favorites',
//     element: <LazyFavoritesPage />
//   },
//   {
//     path: '/movie/:imdbID',
//     element: <Movie />
//   },
//   {
//     path: '*',
//     element: <LazyPage404 />
//   }
// ])

export default function App () {
  const mockMappedMovies = mockMovies()
  return (
    <>
    <main>
      <Suspense fallback={<Loader />}>
        <FavoritesProvider>

          <Navbar />
            <Routes>
              <Route path='/' element={<LazyHomePage />}>
                <Route index element={<Movies movies={mockMappedMovies} />} />
                <Route path='search/:searchID' element={<Movies />} />
              </Route>
              <Route path='/favorites' element={<LazyFavoritesPage />} />
              <Route path='/movie/:imdbID' element={<LazyMoviePage />} />
              <Route path='/*' element={<LazyPage404 />} />
            </Routes>

          {/* <RouterProvider router={router} /> */}

          {/* <BrowserRouter>
            <Nav />
            <Routes>
              <HashRouter>
              <Route path='/' element={<LazyHomePage />} />
              <Route path='/favorites' element={<LazyFavoritesPage />} />
              <Route path='/movie/:imdbID' element={<Movie />} />
              <Route path='/*' element={<LazyPage404 />} />
              </HashRouter>
            </Routes>
          </BrowserRouter> */}

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
