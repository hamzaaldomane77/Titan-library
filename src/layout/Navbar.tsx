import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/books', label: 'Books' },
    { to: '/authors', label: 'Authors' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' }
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/80 backdrop-blur-lg
        border-b border-gray-100
        transition-all duration-300
        ${isScrolled ? 'shadow-sm' : 'shadow-none'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <span className="text-white text-xl font-bold">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                Titan
              </span>
              <span className="text-sm font-medium text-blue-600 leading-tight">
                Library
              </span>
            </div>
          </Link>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="
                  relative px-4 py-2
                  text-sm font-medium text-gray-700
                  hover:text-gray-900
                  transition-all duration-300
                  group
                "
              >
                <span className="relative z-10">{link.label}</span>
                {/* Animated Underline */}
                <span
                  className="
                    absolute bottom-0 left-0 right-0 h-0.5
                    bg-blue-600
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 ease-out
                    origin-left
                  "
                />
              </Link>
            ))}
          </div>

          {/* My Books Button - Right (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/borrowed"
              className="
                flex items-center gap-2
                px-6 py-2.5
                bg-linear-to-r from-blue-600 to-blue-700
                text-white text-sm font-medium
                rounded-xl
                shadow-sm hover:shadow-md
                transition-all duration-300
                hover:from-blue-700 hover:to-blue-800
                group
              "
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>My Books</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="
              md:hidden 
              p-2 rounded-lg
              text-gray-700 hover:text-gray-900
              hover:bg-gray-100
              transition-all duration-300
              focus:outline-none
            "
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span
                className={`
                  absolute left-0 w-full h-[1.5px] bg-current
                  transition-all duration-300
                  ${isMenuOpen ? 'rotate-45 top-[10px]' : 'top-0'}
                `}
              />
              <span
                className={`
                  absolute left-0 top-[10px] w-full h-[1.5px] bg-current
                  transition-all duration-300
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              <span
                className={`
                  absolute left-0 w-full h-[1.5px] bg-current
                  transition-all duration-300
                  ${isMenuOpen ? '-rotate-45 top-[10px]' : 'top-[20px]'}
                `}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 border-t border-gray-100 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="
                  block px-4 py-3
                  text-base font-medium text-gray-700
                  hover:text-gray-900 hover:bg-gray-50
                  rounded-lg
                  transition-all duration-200
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/borrowed"
              className="
                w-full flex items-center justify-center gap-2
                px-4 py-3 mt-4
                bg-linear-to-r from-blue-600 to-blue-700
                text-white text-base font-medium
                rounded-xl
                shadow-sm hover:shadow-md
                transition-all duration-300
                hover:from-blue-700 hover:to-blue-800
              "
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>My Books</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

