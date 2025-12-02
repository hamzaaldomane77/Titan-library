import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Titan Library</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A specialized digital library for book lending. Discover the world of knowledge with us and explore our vast collection of books.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                مكتبة رقمية متخصصة في إعارة الكتب. اكتشف عالم المعرفة معنا واستكشف مجموعتنا الواسعة من الكتب.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Search Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Help & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Policies</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/copyright"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Copyright Notice
                  </Link>
                </li>
                <li>
                  <Link
                    to="/borrowing"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Borrowing Rules
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:info@titanlibrary.com"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    info@titanlibrary.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-pink-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © 2025 Titan Library — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

