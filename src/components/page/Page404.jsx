// import { Link } from 'rho-router'
import { NavLink } from 'react-router-dom'
import './Page404.css'
import { styled } from 'styled-components'

export default function Page404 () {
  return (
    <>
        <Section404 className='main-404'>
            {/* <Link className='return' to={'/movieSearchReact/'}>Back to home</Link> */}
            <NavLink className='return' to={'/'}>Back to home</NavLink>
            <img src="https://cdn.dribbble.com/users/2182116/screenshots/13933572/media/cc32730b1eb3a657a48a6ceacefc72fb.gif" alt="404 Gif" />
        </Section404>
    </>
  )
}

const Section404 = styled.section`
    min-height: 75vh;
    .return {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`
