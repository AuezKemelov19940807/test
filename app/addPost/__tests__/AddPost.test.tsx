import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import AddPost from '../page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('AddPost', () => {
  describe('Render', () => {
    it('should render the UpdatePost', () => {
      const component = (
        <Provider store={store}>
          <AddPost />
        </Provider>
      )
      render(component)
      const container = screen.getByTestId('container')
      expect(container).toBeInTheDocument()
    })
  })
})
