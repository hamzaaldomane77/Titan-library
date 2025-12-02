import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getFeaturedBook, getSmallBooks } from '../../../contents/newArrivals'

function NewArrivals() {
  const featuredBook = getFeaturedBook()
  const smallBooks = getSmallBooks()

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const featuredVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  }

  const smallBooksVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const smallBookItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (!featuredBook) return null

  return (
    <section className="w-full py-20 md:py-32 bg-[#faf9f7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Magazine Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 tracking-tight">
              New Arrivals
            </h2>
            <Link
              to="/books"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="h-px w-32 bg-linear-to-r from-gray-900 to-transparent"></div>
          <p className="mt-4 text-lg md:text-xl text-gray-600 font-light italic">
            أحدث الكتب المضافة
          </p>
        </motion.div>

        {/* Magazine Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Featured Book - Large Card on Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={featuredVariants}
            className="lg:col-span-2"
          >
            <Link
              to={`/category/${featuredBook.categoryId}`}
              className="group block"
            >
              <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Book Cover - Hero Image */}
                <div className="relative h-96 md:h-[500px] bg-linear-to-br from-amber-50 to-orange-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-20">📚</div>
                  </div>
                  
                  {/* NEW Badge */}
                  {featuredBook.isNew && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-2 bg-linear-to-r from-amber-600 to-amber-700 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
                        New
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Scale on Hover */}
                  <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div className="w-full h-full bg-linear-to-br from-blue-50/30 to-indigo-100/30" />
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                    {featuredBook.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-500 font-serif mb-4 italic">
                    {featuredBook.titleEn}
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-700 font-medium mb-1">
                    {featuredBook.author}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {featuredBook.authorEn}
                  </p>
                  {featuredBook.isbn && (
                    <p className="text-xs text-gray-500 mb-4">
                      ISBN: {featuredBook.isbn}
                    </p>
                  )}

                  {/* Tagline */}
                  {featuredBook.tagline && (
                    <p className="text-base text-gray-600 mb-6 font-light leading-relaxed italic">
                      "{featuredBook.tagline}"
                    </p>
                  )}

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all duration-300">
                    <span className="uppercase tracking-wider text-sm">Read More</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Small Books - Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={smallBooksVariants}
            className="lg:col-span-1 space-y-6"
          >
            {smallBooks.map((book) => (
              <motion.div key={book.id} variants={smallBookItemVariants}>
                <Link
                  to={`/category/${book.categoryId}`}
                  className="
                    group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md
                    transition-all duration-500
                    hover:-translate-y-1
                  "
                >
                <div className="flex gap-4 p-4 md:p-5">
                  {/* Small Book Cover */}
                  <div className="relative shrink-0 w-24 h-32 md:w-28 md:h-36 bg-linear-to-br from-slate-100 to-slate-200 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-30">📖</div>
                    </div>
                    
                    {/* NEW Badge - Small */}
                    {book.isNew && (
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-linear-to-r from-amber-600 to-amber-700 text-white text-[10px] font-bold rounded-full shadow-md uppercase">
                          New
                        </span>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
                      {book.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                      {book.titleEn}
                    </p>
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {book.author}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {book.authorEn}
                    </p>
                    {book.isbn && (
                      <p className="text-[11px] text-gray-400">
                        ISBN: {book.isbn}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider"
          >
            View All Books
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals

