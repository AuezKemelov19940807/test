import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePost from '../CreatePost'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('AddTodo', () => {
  describe('Render', () => {
    it('should render the textarea Title', () => {
      const component = (
        <Provider store={store}>
          <CreatePost />
        </Provider>
      )

      render(component)

      const textareaTitle = screen.getByPlaceholderText('title') //ACT
      const textareaBody = screen.getByPlaceholderText('description') //ACT
      const buttonAddPost = screen.getByRole('button', {
        name: 'Add Post',
      })
      const buttonBack = screen.getByRole('button', {
        name: 'Back',
      })

      expect(textareaTitle).toBeInTheDocument() // ASSERT
      expect(textareaBody).toBeInTheDocument() // ASSERT
      expect(buttonAddPost).toBeInTheDocument() // ASSERT
      expect(buttonBack).toBeInTheDocument() // ASSERT
    })
    describe('Behavior', () => {
      it('should be able to add text to the textarea', async () => {
        const component = (
          <Provider store={store}>
            <CreatePost />
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
            <CreatePost />
          </Provider>
        )

        render(component)

        const textareaBody = screen.getByPlaceholderText('description') //ACT
        await userEvent.type(textareaBody, 'hey there')
        expect(textareaBody).toHaveValue('hey there') // ASSERT
      })
    })
  })
})
