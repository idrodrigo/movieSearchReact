import Home from '../../components/page/Home'
import { describe, it, beforeEach, afterEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FavoritesProvider } from '../../context/favorites'

describe('<Home />', () => {
  beforeEach(() => render(
    <FavoritesProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
    </FavoritesProvider>
  ))

  afterEach(cleanup)

  it('should render correctly', () => {
    screen.getByRole('textbox')
    screen.getByText('Search a movie!')
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'batman' } })
    screen.getByText('batman')
  })
})
