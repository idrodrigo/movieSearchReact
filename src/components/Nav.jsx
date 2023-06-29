import { NavLink } from 'react-router-dom'
import './Nav.css'
// import { Link } from 'rho-router'

function Nav () {
  const list = ['favorites']
  return (

    <nav>
        <div className='logo'>
        <NavLink to='/'>
            <img src='./popcorn.svg' alt='movies' />
            <h1>Movies Search</h1>
        </NavLink>

        </div>

         <div className='links'>
        <NavLink to='/'
        className={({ isActive }) => isActive ? 'activo' : null}>
            Home
        </NavLink>

        {
            list.map(link =>
            <NavLink to={`/${link}`} key={link}
            className={({ isActive }) => isActive ? 'activo' : null}>
                {link}
            </NavLink>)
        }
        </div>

{/*
        <div className='logo'>
            <Link to='/movieSearchReact/'>
                <img src='./popcorn.svg' alt='movies' />
                <h1>Movies Search</h1>
            </Link>
        </div>
        <div className='links'>
            <Link to='/movieSearchReact/'>
                Home
            </Link>
            {
                list.map(link =>
                <Link to={`/movieSearchReact/${link}`} key={link}>
                    {link}
                </Link>)
            }
        </div> */}

    </nav>
  )
}

export default Nav
