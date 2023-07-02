// import { Link } from 'rho-router'
import { NavLink } from 'react-router-dom'
import './Page404.css'

export default function Page404 () {
  return (
    <>
        <section className='main-404'>
            {/* <Link className='return' to={'/movieSearchReact/'}>Back to home</Link> */}
            <NavLink className='return' to={'/'}>Back to home</NavLink>
            <img src="https://cdn.dribbble.com/users/2182116/screenshots/13933572/media/cc32730b1eb3a657a48a6ceacefc72fb.gif" alt="404 Gif" />
        </section>
    </>
  )
}
