import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { useRouter } from 'next/navigation'
import UpdatePost from '../UpdatePost'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('UpdatePost', () => {
  describe('Render', () => {
    it('should render the UpdatePost', () => {
      const component = (
        <Provider store={store}>
          <UpdatePost />
        </Provider>
      )

      render(component)
    })
  })
  describe('Behavior', () => {
    it('should be able to add text to the textarea', async () => {
      const component = (
        <Provider store={store}>
          <UpdatePost />
        </Provider>
      )

      render(component)

      const textareaTitle = screen.getByPlaceholderText('title') //ACT
      await userEvent.type(textareaTitle, 'hey there')
      expect(textareaTitle).toHaveValue('hey there') // ASSERT
    })
  })
  describe('Behavior', () => {
    it('should be able to add text to the textarea', async () => {
      const component = (
        <Provider store={store}>
          <UpdatePost />
        </Provider>
      )

      render(component)

      const textareaBody = screen.getByPlaceholderText('description') //ACT
      await userEvent.type(textareaBody, 'hey there')
      expect(textareaBody).toHaveValue('hey there') // ASSERT
    })
  })
})
