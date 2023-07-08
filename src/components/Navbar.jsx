import styled from 'styled-components'
import BurguerButton from './BurgerIcon'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsDiscFill } from 'react-icons/bs'

export default function Navbar () {
  const list = ['favorites']
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>

      <NavContainer>
        <div className='logo'>
          <NavLink to='/'>
            <BsDiscFill role='logo-go-home'/>
            {/* <img src='./popcorn.svg' alt='image of the movie search logo' /> */}
            <h1>Movies Search</h1>
          </NavLink>
        </div>

        <div role={'links'} className={`links ${clicked ? 'active' : ''}`}>
          <NavLink onClick={handleClick} to='/'>Home</NavLink>
          {
            list.map(link =>
              <NavLink
                onClick={handleClick}
                to={`/${link}`}
                key={link}
                className={({ isActive }) => isActive ? 'activo' : null}>
                {link}
              </NavLink>)
          }
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv role={'bgdiv'} className={`initial ${clicked ? ' active' : ''}`} />
      </NavContainer>
      <NavGhost></NavGhost>
    </>
  )
}

const NavContainer = styled.nav`
  width: 100vw;
  height: 8vh;
  padding: .4rem;
  background-color: rgb(210, 243, 255);
  border-bottom: 2px solid #E2E8F0;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3;

  .logo{
    margin: 0;

    svg{
      color:#1ED760;
      display: inline-block;
      height: 25px;
      width: 25px;
    }
    h1 {
      color: var(--links);
      color:#1ED760;
      padding-left: 0.5rem;
      display: inline-block;
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
  }

  .links{
    position: absolute;   
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    left: -300vw;
    top: 8vh;

    
    a{
      color: var(--links);
      text-decoration: none;
      margin-right: 1rem;
      display: block;
      font-weight: bolder;
      font-size: 1.2rem;
      
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      a{
        color: var(--links);
        display: inline;
        margin-right: 2.5rem;
        
      }
    }
  }

  .links.active{
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 8vh;
    left: 0;
    right: 0;
    padding: 0 2rem;
    text-align: start;
    transition: all .4s ease ;

    a{
      margin-right: 0;
      margin-top: 1rem;
      color: black;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      padding: 0;
      text-align: center;
      a{   
        color: var(--links);
        border-bottom: 0;   
        margin-right: 2.5rem;
        font-size: 1.2rem;
        display: inline;
      }
    }
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`
const BgDiv = styled.div`
  z-index: -1;
  background-color: rgb(210, 243, 255);
  border-bottom: 2px solid #E2E8F0;
  position: absolute;
  top: -14vh;
  left: 0;
  width: 100vw;
  height: 22vh;
  transition: all .4s ease;
  @media(min-width: 768px){
    display: none;
  }
  
  &.active{
    top: 0;
    left: 0;
  }
`
const NavGhost = styled.div`
  height: 8vh;
`
