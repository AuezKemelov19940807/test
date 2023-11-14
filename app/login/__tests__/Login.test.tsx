import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}))

describe('Login', () => {
  describe('Render', () => {
    jest.mock('axios')
    const handleSubmit = jest.fn()
    it('should render the Title', () => {
      render(<Login />)
      const header = screen.getByRole('heading', {
        name: 'Good to see you again',
      })

      expect(header).toBeInTheDocument() // ASSERT
    })
    it('should render the Email address', () => {
      render(<Login />)
      const labelEmail = screen.getByLabelText('Email address')
      expect(labelEmail).toBeInTheDocument()
    })
    it('should render the Password', () => {
      render(<Login />)
      const labelPassword = screen.getByText('Password')
      expect(labelPassword).toBeInTheDocument()
    })
    it('should render the email input', () => {
      render(<Login />)
      const inputEmail = screen.getByPlaceholderText('email')
      expect(inputEmail).toBeInTheDocument()
    })
    it('should render the password input', () => {
      render(<Login />)
      const inputPassword = screen.getByPlaceholderText('password')
      expect(inputPassword).toBeInTheDocument()
    })
    it('should render the password input', () => {
      render(<Login />)
      const buttonSignIn = screen.getByRole('button', {
        name: 'Sign In',
      })
      expect(buttonSignIn).toBeInTheDocument()
    })
    it('should not submit the form if required fields are empty', async () => {
      render(<Login />)
      const buttonSignIn = screen.getByRole('button', {
        name: 'Sign In',
      })
      handleSubmit.mockClear()
      await userEvent.click(buttonSignIn)
      expect(handleSubmit).not.toHaveBeenCalled()
    })
    // it('should  submit the form with corrent values', async () => {
    //   jest.mock('axios')

    //   render(<Login />)

    //   handleSubmit.mockClear()
    //   const buttonSignIn = screen.getByRole('button', {
    //     name: 'Sign In',
    //   })
    //   const inputEmail = screen.getByPlaceholderText('email')
    //   const inputPassword = screen.getByPlaceholderText('password')
    //   await userEvent.type(inputEmail, 'kemelove@bk.ru')
    //   await userEvent.type(inputPassword, 'xxxxxxx')
    //   await userEvent.click(buttonSignIn)
    //   expect(handleSubmit).toHaveBeenCalledTimes(1)

    //   expect(handleSubmit).toHaveBeenCalledWith({
    //     email: 'kemelove@bk.ru',
    //     password: 'xxxxxxx',
    //   })
    // })

    describe('Behavior', () => {
      it('should be able to add text to the email input', async () => {
        render(<Login />)

        const inputEmail = screen.getByPlaceholderText('email') //ACT

        await userEvent.type(inputEmail, 'hey there')
        expect(inputEmail).toHaveValue('hey there') // ASSERT
      })
      it('should be able to add text to the password input', async () => {
        render(<Login />)

        const inputPassword = screen.getByPlaceholderText('password') //ACT
        await userEvent.type(inputPassword, 'hey there')
        expect(inputPassword).toHaveValue('hey there') // ASSERT
      })
    })
  })
})
