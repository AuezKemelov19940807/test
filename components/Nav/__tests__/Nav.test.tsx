import { render, screen } from '@testing-library/react'
import Nav from '../Nav'
import { ReactElement } from 'react'
import React from 'react'
// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Nav', () => {
  jest.mock(
    'next/link',
    () =>
      ({ children, ...rest }: { children: ReactElement }) =>
        React.cloneElement(children, { ...rest })
  )
  it("News should have  href '/' ", () => {
    render(<Nav />)

    const news = screen.getByText('News')

    expect(news).toHaveAttribute('href', '/')
  })

  it("Sign Up should have  href '/registration' ", () => {
    render(<Nav />)

    const signUp = screen.getByText('Sign Up')

    expect(signUp).toHaveAttribute('href', '/registration')
  })

  it("Sign In should have  href '/login' ", () => {
    render(<Nav />)

    const signIn = screen.getByText('Sign In')

    expect(signIn).toHaveAttribute('href', '/login')
  })
})
