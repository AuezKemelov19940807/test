import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Registration from '../page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('Registration', () => {
  describe('Render', () => {
    jest.mock('axios')
    const handleSubmit = jest.fn()
    it('should render the Title', () => {
      render(<Registration />)
      const header = screen.getByRole('heading', {
        name: 'Create an Dodo Pizza account',
      })

      expect(header).toBeInTheDocument() // ASSERT
    })
    it('should render the Email address', () => {
      render(<Registration />)
      const labelEmail = screen.getByLabelText('Email address')
      expect(labelEmail).toBeInTheDocument()
    })
    it('should render the Password', () => {
      render(<Registration />)
      const labelPassword = screen.getByText('Password')
      expect(labelPassword).toBeInTheDocument()
    })
    it('should render the email input', () => {
      render(<Registration />)
      const inputEmail = screen.getByPlaceholderText('email')
      expect(inputEmail).toBeInTheDocument()
    })
    it('should render the password input', () => {
      render(<Registration />)
      const inputPassword = screen.getByPlaceholderText('password')
      expect(inputPassword).toBeInTheDocument()
    })
    it('should render the password input', () => {
      render(<Registration />)
      const buttonSignIn = screen.getByRole('button', {
        name: 'Sign Up',
      })
      expect(buttonSignIn).toBeInTheDocument()
    })
    it('should not submit the form if required fields are empty', async () => {
      render(<Registration />)
      const buttonSignIn = screen.getByRole('button', {
        name: 'Sign Up',
      })
      handleSubmit.mockClear()
      await userEvent.click(buttonSignIn)
      expect(handleSubmit).not.toHaveBeenCalled()
    })

    describe('Behavior', () => {
      it('should be able to add text to the email input', async () => {
        render(<Registration />)

        const inputEmail = screen.getByPlaceholderText('email') //ACT

        await userEvent.type(inputEmail, 'hey there')
        expect(inputEmail).toHaveValue('hey there') // ASSERT
      })
      it('should be able to add text to the password input', async () => {
        render(<Registration />)

        const inputPassword = screen.getByPlaceholderText('password') //ACT
        await userEvent.type(inputPassword, 'hey there')
        expect(inputPassword).toHaveValue('hey there') // ASSERT
      })
    })
  })
})
