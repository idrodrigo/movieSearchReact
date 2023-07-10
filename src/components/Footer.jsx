import { styled } from 'styled-components'
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Footer () {
  return (
    <>
      <Foooter>
        <div className='icons-redes'>
          <IconContext.Provider value={{ color: '#00358A', size: '2em' }}>
            <IconAnchor >
            <a href='https://www.linkedin.com/in/idrodrigo/' target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
            </IconAnchor>
            <IconAnchor>
            <a href='https://www.idrodrigo.com/' target='_blank' rel='noreferrer'>
              <BsGlobe2 />
            </a>
            </IconAnchor>
            <IconAnchor>
            <a href='https://www.github.com/idrodrigo/' target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
            </IconAnchor>
          </IconContext.Provider>
        </div>
        <div className='end'>
          <div className='rho'>
            <p><a href='https://github.com/idrodrigo' target='_blank' rel='noreferrer'>© Rho 2023, all rights reserved</a></p>
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
  background-color: var(--background-body);
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
      margin-left: 15%;
    margin-right: 15%;
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

export const IconAnchor = styled.div`
  > *{
  overflow: hidden;
  height: ${(props) => props.height || '2em'};
  width: ${props => props.width || '2em'};
  border: 1px solid #E2E8F0;
  border-color: ${props => props.$bcolor || '#E2E8F0'};
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: ${props => props.$bradio || '100%'};
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

&:hover {
  background-color: white;
  transition: all 0.4s ease-in-out;
}
}
`
