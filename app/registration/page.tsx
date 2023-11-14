'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Registration = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [validation, setValidation] = useState<boolean>(false)
  //state errors
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  //change state email
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
  }
  //change state password
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value })
  }

  //submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isValid = false
    let errors: FormDataProps = { email: '', password: '' }

    if (formData.email === '' || formData.email === null) {
      isValid = true
      errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = true
      errors.email = 'Email is not valid'
    }

    if (formData.password === '' || formData.password === null) {
      isValid = true
      errors.password = 'Password required'
    } else if (formData.password.length < 6) {
      isValid = true
      errors.password = 'Password length at least 6 char'
    }

    if (
      Object.values(errors.email).length === 0 &&
      Object.values(errors.password).length === 0
    ) {
      axios
        .post('https://654d8192cbc3253557419c01.mockapi.io/users', formData)
        .then((res) => {
          alert('Registration success')
          router.push('/login')
        })
        .catch((err) => console.log(err))
    }

    setValidation(isValid)
    setErrors(errors)
  }

  return (
    <div className="flex justify-center mt-16">
      <div style={{ minWidth: '30%' }}>
        <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              <svg
                width="31"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 44.59"
              >
                <path
                  d="M19.78 0c12.85 0 22.73 8.86 22.73 22s-9.88 22.3-22.74 22.3H5.33A5.1 5.1 0 010 39V5.52A5.25 5.25 0 015.33 0h14.45z"
                  fill="#ff6900"
                ></path>
                <path d="M34.57 17.23c-.07.55-.69.55-1 .07-.9-1.52-2.07-1.8-3.94-1.94-1.39-.07-3 .07-4.56.07H25l-.11-.06a.31.31 0 01-.11-.21c.28-1.31 1.39-3.72 2.56-3.94.55-.07 1.8-.21 2.49-.21 3.17-.01 4.88 3.66 4.74 6.22zm-18 12.55a22.11 22.11 0 007.19.69 19.13 19.13 0 008.92-2.91c-1 2.64-5 4.28-8.71 4.69 0 .21-.07.34-.07.55a14.91 14.91 0 006.77-1.94c-.69 2.56-4.15 3.6-7.33 3.81a4.09 4.09 0 01-.28.55 15.88 15.88 0 004.64-.62c-1.46 2.7-7.68 4.57-12.93 2.1a16.62 16.62 0 001.8-6.92zm17.38-18.43a6.07 6.07 0 00-4.36-1.66c-2.07 0-3.8.55-6.36.62-1.73.07-3.32-3.72-5.39-4.22a2.69 2.69 0 00-4.21-1.24c-1.17-.69-3-.34-3 1-1.31-.41-3 .28-2.28 2.08-3.25.07-3.8 3-1.66 3.25-2.89 1.56-1.57 4.33.78 3.82.42 4.15 2.28 9.55-.76 10.87a8.14 8.14 0 01-4.36-.14L0 25.06v2.14a21.34 21.34 0 006 .8c4-.41 4.22-3.72 4-6.64s-1.17-6.16-.83-8.51l-.14-.14c-1.45 1.52-2.42 1.11-2.56.62-.16-.94 1.53-2.18 2.53-2.6 0-.07.07-.14.07-.21-.9.14-2 0-2.07-.62s1.52-1.52 3.6-1.31c.07 0 .07-.07.14-.07l-.41-.21a.72.72 0 01-.46-1 1.48 1.48 0 011.24-.46 4.63 4.63 0 011.89.37c.07 0 .07-.07.14-.07a2.47 2.47 0 01-.41-.41.53.53 0 010-.7 1.44 1.44 0 011.66.28l.34.34h.11l.1-.06a.75.75 0 01-.21-.46.41.41 0 01.27-.57.84.84 0 01.83.34 3.38 3.38 0 01.41.86A5.74 5.74 0 0012 8.93a6.61 6.61 0 00-.83 5.68 40.57 40.57 0 002 6.23v.07C14.85 25.68 18 37.44 2.63 43.68a6.33 6.33 0 002.56.62h1.59a20 20 0 006.84-5.67c7.05 3.11 13.46 1.52 16.24-3.6A6.77 6.77 0 0033 30a5.19 5.19 0 001-4.48c-.07-.28-.34-.28-.76-.07-5.74 3.46-10.78 4-16.8 2.22a45.53 45.53 0 00-.83-5.61c-.14-2.42.62-3.6 5-2.15a13.71 13.71 0 015.25 2.79c.46.34 1.1.76 1.45.46a1.33 1.33 0 00.28-1 11.58 11.58 0 00-1.24-4.36 36.1 36.1 0 013.94 0 2.23 2.23 0 012 1.52c.46 1.39 3.18 1 3.39-.14.41-2.42.55-5.61-1.8-7.82zM3.25 32.11a25.44 25.44 0 00-3.25 0v1.45c1.86-.41 3-.62 3-.62z"></path>
                <path
                  d="M20.54 17c-2.42-.55-5.1-1.25-6.5-3.32 0-.07-.07-.07-.14-.07a.62.62 0 00.07.34l-.21.07a1.39 1.39 0 01-.07-1.66 1.78 1.78 0 012.28-.21l-.07.21a1.52 1.52 0 00-1 .07.38.38 0 00-.2.24.38.38 0 00.06.31c1.17 2.22 4.64 2.7 8.71 2.36A.49.49 0 0024 15a7.85 7.85 0 011.93-3.67 10.82 10.82 0 01-2 .14c-2.07.14-3.32-.14-3.67-.41l.07-.21a.49.49 0 00.46 0 .26.26 0 00-.07-.21c-.39-.37-2.19-2.23-2.19-2.23-.21-1.64-2.53-1.64-3.39-.12l-.28-.07a2.33 2.33 0 01.34-.83 4.35 4.35 0 00-3.2 3.72c-.83 7.06 9.88 5.4 12.93 8.24.07.07.21.28.28.14s-1.24-1.8-4.7-2.56zm-3.72-8.52a1.67 1.67 0 011.59 1.11c.35.76.28 1.52-.21 1.73a1.55 1.55 0 01-1.61-1.1c-.07-.14-.07-.21-.14-.34h.07A.46.46 0 0017 10a.52.52 0 000-.69.64.64 0 00-.55-.41l-.07-.07a.93.93 0 01.41-.34M32.7 27.55a19.13 19.13 0 01-8.92 2.91 24.42 24.42 0 01-7.19-.69 10.59 10.59 0 01-.21 2.08 28.73 28.73 0 006.15.76 10.33 10.33 0 01-3 5.26c3.71.14 7.12-1.31 8.16-3.25a14.11 14.11 0 01-4.64.62c.07-.21.21-.34.28-.55 3.18-.14 6.64-1.18 7.33-3.81a14.91 14.91 0 01-6.77 1.94c0-.21.07-.34.07-.55 3.71-.46 7.67-2.08 8.71-4.71"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Dodo Pizza account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  text-gray-900 mb-3"
                  >
                    Email address
                  </label>
                  <div className="">
                    <input
                      placeholder="email"
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  px-2"
                      value={formData.email}
                      onChange={handleChangeEmail}
                    />
                  </div>
                  <span>
                    {validation ? (
                      <span className="text-red-400 text-[12px] absolute mt-1">
                        {errors.email}
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#065F46] hover:text-[#1c8d6d]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <input
                    placeholder="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    value={formData.password}
                    onChange={handleChangePassword}
                  />
                </div>
                <div className="absolute">
                  {validation ? (
                    <span className="text-red-400 text-[12px]">
                      {errors.password}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="pt-3">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#065F46] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1c8d6d]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c8d6d] transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <span
                className="font-semibold leading-6 text-[#065F46] hover:text-[#1c8d6d] cursor-pointer"
                onClick={() => {
                  router.push('/signup')
                }}
              >
                Start a 14 day free trial
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
