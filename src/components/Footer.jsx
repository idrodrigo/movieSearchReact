import { styled } from 'styled-components'

export default function Footer () {
  return (
        <>
            <Foooter>
              <div className='icons-redes'>
                <a href='https://www.linkedin.com/in/idrodrigo/' target='_blank' rel='noreferrer'>
                  <img src='./linkedin.svg' alt='linkedin' />
                </a>
                <a href='https://www.linkedin.com/in/idrodrigo/' target='_blank' rel='noreferrer'>
                  <img src='./linkedin.svg' alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/idrodrigo/' target='_blank' rel='noreferrer'>
                  <img src='./linkedin.svg' alt='' />
                </a>
              </div>
              <div className='end'>
                <p><a href='https://github.com/idrodrigo' target='_blank' rel='noreferrer'>@Rho 2023, all rights reserved</a></p>
                <p><a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>OMDb API</a></p>
                <p><a href='https://www.imdb.com/' target='_blank' rel='noreferrer'>imdb</a></p>
                <p><a href='https://www.imdb.com/' target='_blank' rel='noreferrer'>rottentomatoes</a></p>
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
  justify-content: end;

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
      border: 1px solid white;
      margin-left: 1rem;
      margin-right: 1rem;
      border-radius: 100%;
      padding: 0.5rem;
      transition: all 0.6s ease-in-out;
      &:hover {
        background-color: rgb(210, 243, 255);
        transition: all 0.6s ease-in-out;
      }

    }
  }


  .end {
    border-top: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: 600;
    font-size: small;
  
    
  }
  p {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0;
    margin-left: 2rem;
    
  }

  a{
    /* color: black; */
    text-decoration: none;
  }
`
