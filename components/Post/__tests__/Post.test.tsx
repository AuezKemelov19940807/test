import { render, screen } from '@testing-library/react'
import Post from '../Post'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('Post', () => {
  describe('Render', () => {
    it('should render Post', () => {
      const component = (
        <Provider store={store}>
          <Post id="" title="" body="" />
        </Provider>
      )

      render(component)
    })
    it('should render an title', () => {
      const component = (
        <Provider store={store}>
          <Post id="" title="" body="" />
        </Provider>
      )

      render(component)
      //ACT
      const postTitle = screen.getByTestId('post-title')
      expect(postTitle).toBeInTheDocument()
    })
    it('should render an description', () => {
      const component = (
        <Provider store={store}>
          <Post id="" title="" body="" />
        </Provider>
      )

      render(component)
      //ACT
      const postDescription = screen.getByTestId('post-desc')
      expect(postDescription).toBeInTheDocument()
    })
    it('should render button Edit', () => {
      const component = (
        <Provider store={store}>
          <Post id="" title="" body="" />
        </Provider>
      )

      render(component)
      const buttonEdit = screen.getByTestId('edit')
      expect(buttonEdit).toBeInTheDocument()
    })
    it('should render button Delete', () => {
      const component = (
        <Provider store={store}>
          <Post id="" title="" body="" />
        </Provider>
      )

      render(component)
      const buttonDelete = screen.getByTestId('delete')
      expect(buttonDelete).toBeInTheDocument()
    })
  })
})
