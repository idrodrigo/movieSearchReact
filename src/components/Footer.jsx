import { styled } from 'styled-components'
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Footer () {
  return (
    <>
      <Foooter>
        <div className='icons-redes'>
          <IconContext.Provider value={{ color: '#0f6dff', size: '2em' }}>
            <a href='https://www.linkedin.com/in/idrodrigo/' target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
            <a href='https://www.idrodrigo.com/' target='_blank' rel='noreferrer'>
              <BsGlobe2 />
            </a>
            <a href='https://www.github.com/idrodrigo/' target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
          </IconContext.Provider>
        </div>
        <div className='end'>
          <div className='rho'>
            <p><a href='https://github.com/idrodrigo' target='_blank' rel='noreferrer'>@Rho 2023, all rights reserved</a></p>
          </div>
          <div className='links'>
            <p><a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>OMDb API</a></p>
            <p><a href='https://www.imdb.com/' target='_blank' rel='noreferrer'>Imdb</a></p>
            <p><a href='https://www.rottentomatoes.com/' target='_blank' rel='noreferrer'>Rottentomatoes</a></p>
          </div>
        </div>

      </Foooter>
    </>
  )
}

const Foooter = styled.footer`
  min-height: 15vh;
  background-color: rgb(210, 243, 255);
  border-top: 2px solid #E2E8F0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .icons-redes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    a{
      overflow: hidden;
      width: 2rem;
      height: 2rem;
      border: 1px solid #E2E8F0;
      margin-left: 1rem;
      margin-right: 1rem;
      border-radius: 100%;
      transition: all 0.6s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(210, 243, 255);
        transition: all 0.6s ease-in-out;
      }
    }
  }

  .end {
    margin-left: 15%;
    margin-right: 15%;
    border-top: 1px solid var(--links);
    font-weight: 600;
    font-size: small;
    padding-top: 13px;
    padding-bottom: 13px;
    a{
      text-decoration: none;
    }
    .rho{
      p{
        margin: 0;
      }
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        p{
          margin: 0;
        }
      }
    @media(min-width: 768px){
      margin-left: 20%;
    margin-right: 20%;
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 0;
      p {
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin: 0;
        margin-left: 2rem;
      }
      .links {
        p{
          margin-left: 2rem;
        }
      }
      .rho{
        p{
          margin-left: 2rem;
        }
      }
    }
  }



`
