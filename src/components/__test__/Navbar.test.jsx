import { describe, it, beforeEach, afterEach, expect } from 'vitest'
import Navbar from '../../components/Navbar'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('<Navbar />', () => {
  beforeEach(() => render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
  ))

  afterEach(cleanup)

  it('should render correctly', () => {
    screen.getByText('Movies Search', 'Home', 'favorites')
    screen.getByRole('burger')
  })

  it('should render logo', () => {
    // screen.getByAltText('image of the movie search logo')
    screen.getByRole('logo-go-home')
  })

  it('should toggle clicked state when burger button is clicked', () => {
    const burgerButton = screen.getByRole('burger')
    const bgDiv = screen.getByRole('bgdiv')
    const navLinks = screen.getByRole('links')

    fireEvent.click(burgerButton)
    expect(bgDiv.classList.contains('active')).toBe(true)
    expect(navLinks.classList.contains('active')).toBe(true)
    fireEvent.click(burgerButton)
    expect(bgDiv.classList.contains('active')).toBe(false)
    expect(navLinks.classList.contains('active')).toBe(false)
  })

  it('should navigate to home page when Home link is clicked', () => {
    const homeLink = screen.getByText('Home')
    fireEvent.click(homeLink)
    expect(homeLink.href).toBe('/')
  })

  it('should navigate to favorites page when Favorites link is clicked', () => {
    const favoritesLink = screen.getByText('favorites')
    fireEvent.click(favoritesLink)
    expect(favoritesLink.href).toBe('/favorites')
  })

  it('should close nav(bgDiv, burger) when link is clicked', () => {
    const favoritesLink = screen.getByText('favorites')
    const bgDiv = screen.getByRole('bgdiv')
    const navLinks = screen.getByRole('links')
    const burgerButton = screen.getByRole('burger')

    fireEvent.click(burgerButton)
    expect(bgDiv.classList.contains('active')).toBe(true)
    expect(navLinks.classList.contains('active')).toBe(true)
    fireEvent.click(favoritesLink)
    expect(bgDiv.classList.contains('active')).toBe(false)
    expect(navLinks.classList.contains('active')).toBe(false)
    expect(burgerButton.classList.contains('active')).toBe(false)
  })
})
