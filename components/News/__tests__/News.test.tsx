import { render, screen, waitFor } from '@testing-library/react'
import News from '../News'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('News', () => {
  describe('Render', () => {
    it('should render News', () => {
      const component = (
        <Provider store={store}>
          <News />
        </Provider>
      )

      render(component)
    })
    it('should be initially loading', async () => {
      const component = (
        <Provider store={store}>
          <News />
        </Provider>
      )
      render(component)

      const loading = screen.getByTestId('loading')

      await waitFor(() => {
        expect(loading).toBeDefined()
      })
    })
    it('should render heading', () => {
      const component = (
        <Provider store={store}>
          <News />
        </Provider>
      )
      render(component)
      const header = screen.getByRole('heading', {
        name: 'News Page',
      })

      expect(header).toBeInTheDocument() // ASSERT
    })
    it('should render btn', () => {
      const component = (
        <Provider store={store}>
          <News />
        </Provider>
      )
      render(component)
      const buttonAddPost = screen.getByRole('button', {
        name: 'Add Post',
      })

      expect(buttonAddPost).toBeInTheDocument() // ASSERT
    })
  })
})
