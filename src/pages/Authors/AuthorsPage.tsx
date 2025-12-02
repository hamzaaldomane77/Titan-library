/**
 * Authors Page
 * Displays a list of authors fetched from the API
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthors } from '../../modules/authors'
import AuthorCard from './components/AuthorCard'

function AuthorsPage() {
  const location = useLocation()
  const { data: authors, isLoading, isError, error } = useAuthors()

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

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
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
          className="mb-8 md:mb-10"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Our Authors
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Discover the talented authors and contributors who enrich our library with their works
            </p>
          </div>
          {authors && (
            <div className="text-center text-sm text-gray-600">
              Total: <span className="font-semibold text-gray-900">{authors.length}</span> author(s)
            </div>
          )}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={loadingVariants}
            className="py-16 text-center"
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
            <p className="text-gray-600">Loading authors...</p>
          </motion.div>
        )}

        {/* Error State */}
        {isError && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={loadingVariants}
            className="py-16 text-center"
          >
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Authors</h2>
            <p className="text-gray-600 mb-6">
              {error instanceof Error ? error.message : 'An error occurred while fetching authors'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-blue-600 text-white font-medium
                hover:bg-blue-700
                transition-colors
              "
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry
            </button>
          </motion.div>
        )}

        {/* Authors Grid */}
        {authors && authors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="
              grid gap-5 md:gap-6 lg:gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {authors.map((author, index) => (
              <AuthorCard key={author.id} author={author} index={index} />
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {authors && authors.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={loadingVariants}
            className="py-16 text-center"
          >
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Authors Found</h2>
            <p className="text-gray-600">
              There are no authors available at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AuthorsPage

