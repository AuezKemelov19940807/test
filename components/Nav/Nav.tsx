//componens
import Link from 'next/link'
import Logo from '../Logo/Logo'

const Nav = () => {
  return (
    <>
      <div className="w-full  bg-emerald-800  top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row py-2 md:py-5 justify-between items-center h-full">
            <Logo />
            <ul className="flex gap-x-6 text-white py-2">
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/registration">Sign Up</Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
