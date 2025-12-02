import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { trendingBooks } from '../../../contents/trendingBooks'

function TrendingBooks() {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const { scrollLeft, scrollWidth, clientWidth } = container
      
      // Check if content can scroll
      const canScroll = scrollWidth > clientWidth
      
      if (!canScroll) {
        setCanScrollLeft(false)
        setCanScrollRight(false)
        return
      }
      
      // Check if at start (with small threshold)
      const isAtStart = scrollLeft <= 5
      // Check if at end (with small threshold)
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 5
      
      setCanScrollLeft(!isAtStart)
      setCanScrollRight(!isAtEnd)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      // Initial check
      const check = () => {
        checkScrollability()
      }
      
      // Check immediately
      check()
      
      // Check after short delays to ensure DOM is ready
      const timeout1 = setTimeout(check, 100)
      const timeout2 = setTimeout(check, 300)
      const timeout3 = setTimeout(check, 600)
      
      // Add event listeners
      container.addEventListener('scroll', checkScrollability, { passive: true })
      window.addEventListener('resize', checkScrollability, { passive: true })
      
      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
        clearTimeout(timeout3)
        container.removeEventListener('scroll', checkScrollability)
        window.removeEventListener('resize', checkScrollability)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 224 // w-56 = 14rem = 224px on md
      const gap = 32 // gap-8 = 2rem = 32px on md
      container.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 224 // w-56 = 14rem = 224px on md
      const gap = 32 // gap-8 = 2rem = 32px on md
      container.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      })
    }
  }

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="w-full py-20 md:py-32 from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-3 tracking-tight">
              Trending Now
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl">
              Discover the most popular books borrowed this week
            </p>
          </motion.div>
          
          {/* View All Button - Top Right */}
          <Link
            to="/books"
            className="absolute top-0 right-0 hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <span>View All</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Books Horizontal Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="
                absolute left-0 top-1/3 -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm
                shadow-lg border border-gray-100
                hidden md:flex items-center justify-center
                hover:bg-white transition-all duration-300
                group cursor-pointer
              "
              aria-label="Scroll left"
            >
              <svg 
                className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="
                absolute right-0 top-1/3 -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm
                shadow-lg border border-gray-100
                hidden md:flex items-center justify-center
                hover:bg-white transition-all duration-300
                group cursor-pointer
              "
              aria-label="Scroll right"
            >
              <svg 
                className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <motion.div
            ref={scrollContainerRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {trendingBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                className="shrink-0 w-48 md:w-56 snap-center"
              >
                <div className="group flex flex-col">
                  {/* Book Cover Container */}
                  <div className="relative mb-4">
                    <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 aspect-3/4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      {/* Book Cover Image Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl md:text-7xl opacity-30">📖</div>
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        {book.isTrending && (
                          <span className="px-2.5 py-1 bg-red-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                            🔥 Most Borrowed
                          </span>
                        )}
                        {book.isPopular && (
                          <span className="px-2.5 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                            ⭐ Reader's Choice
                          </span>
                        )}
                      </div>

                      {/* Image Scale Effect on Hover */}
                      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="w-full h-full bg-linear-to-br from-blue-50/50 to-indigo-100/50" />
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="px-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light mb-1 line-clamp-1">
                      {book.author}
                    </p>
                    {book.isbn && (
                      <p className="text-[11px] text-gray-400 mb-1">
                        ISBN: {book.isbn}
                      </p>
                    )}
                    
                    {/* Borrow Count - Subtle */}
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>{book.borrowCount}</span>
                      <span className="text-[10px]">borrows</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>View All Books</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrendingBooks

