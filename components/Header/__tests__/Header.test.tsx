import { render, screen } from '@testing-library/react'
import Header from '../Header'

const mockSetTodos = jest.fn()

describe('Header', () => {
  it('should render Header', () => {
    render(<Header />) // ARRANGE
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument() // ASSERT
  })
})
