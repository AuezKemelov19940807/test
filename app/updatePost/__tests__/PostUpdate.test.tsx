import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import PostUpdate from '../page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('PostUpdate', () => {
  describe('Render', () => {
    it('should render the PostUpdate', () => {
      const component = (
        <Provider store={store}>
          <PostUpdate />
        </Provider>
      )
      render(component)
      const container = screen.getByTestId('container')
      expect(container).toBeInTheDocument()
    })
  })
})
