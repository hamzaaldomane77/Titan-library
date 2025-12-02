import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useBorrowingStore } from '../../store/borrowingStore'
import { showToast } from '../../ui/ToastContainer'
import BookCard from '../../ui/BookCard'
import FeedbackModal from '../../ui/FeedbackModal'

function BorrowedBooksPage() {
  const location = useLocation()

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  const {
    borrowedBooks,
    selectedBorrowedBookIds,
    returnBook,
    returnSelectedBooks,
    returnAllBooks,
    toggleBorrowedBookSelection,
    openFeedbackModal
  } = useBorrowingStore()

  const hasSelectedBooks = selectedBorrowedBookIds.length > 0

  const handleReturnBook = (bookId: number) => {
    returnBook(bookId)
    showToast({
      message: 'Book returned successfully!',
      type: 'success'
    })
    // Open feedback modal after returning a book
    setTimeout(() => {
      openFeedbackModal()
    }, 500)
  }

  const handleReturnSelected = () => {
    if (selectedBorrowedBookIds.length === 0) return

    returnSelectedBooks()
    showToast({
      message: `${selectedBorrowedBookIds.length} book(s) returned successfully!`,
      type: 'success'
    })
    // Open feedback modal after returning books
    setTimeout(() => {
      openFeedbackModal()
    }, 500)
  }

  const handleReturnAll = () => {
    if (borrowedBooks.length === 0) return

    returnAllBooks()
    showToast({
      message: 'All books returned successfully!',
      type: 'success'
    })
    // Open feedback modal after returning all books
    setTimeout(() => {
      openFeedbackModal()
    }, 500)
  }

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
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

  const emptyStateVariants = {
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                My Borrowed Books
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Manage and return your borrowed books
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {borrowedBooks.length > 0 && (
                <>
                  {hasSelectedBooks && (
                    <button
                      onClick={handleReturnSelected}
                      className="
                        px-4 py-2 rounded-xl
                        bg-orange-600 text-white text-sm font-medium
                        hover:bg-orange-700
                        transition-colors
                        flex items-center gap-2
                      "
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Return Selected ({selectedBorrowedBookIds.length})
                    </button>
                  )}
                  <button
                    onClick={handleReturnAll}
                    className="
                      px-6 py-3 rounded-xl
                      bg-red-600 text-white font-medium
                      hover:bg-red-700
                      transition-colors
                      flex items-center gap-2
                    "
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Return All
                  </button>
                </>
              )}
            
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Total: <span className="font-semibold">{borrowedBooks.length}</span> book(s)
          </div>
        </motion.div>

        {/* Books Grid */}
        {borrowedBooks.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="
              grid gap-5 md:gap-6 lg:gap-8
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
            "
          >
            {borrowedBooks.map((book) => {
              const isSelected = selectedBorrowedBookIds.includes(book.id)
              return (
                <motion.div
                  key={`${book.id}-${book.borrowedDate}`}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Checkbox for Selection */}
                  <div className="absolute top-3 left-3 z-10">
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleBorrowedBookSelection(book.id)}
                        className="
                          w-5 h-5 rounded border-gray-300
                          text-blue-600 focus:ring-blue-500
                          cursor-pointer
                        "
                      />
                    </label>
                  </div>
                  <div className={isSelected ? 'ring-2 ring-blue-500 rounded-2xl' : ''}>
                    <BookCard
                      book={book}
                      showCheckbox={false}
                    />
                  </div>
                  {/* Return Button Overlay */}
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={() => handleReturnBook(book.id)}
                      className="
                        px-3 py-1.5 rounded-lg
                        bg-red-600 text-white text-xs font-medium
                        hover:bg-red-700
                        transition-colors
                        shadow-lg
                        flex items-center gap-1
                      "
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Return
                    </button>
                  </div>
                  {/* Borrower Info */}
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-gray-600 mb-1">
                      <span className="font-medium">Borrower:</span> {book.borrowerInfo.fullName}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Borrowed:</span>{' '}
                      {formatDate(book.borrowedDate)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={emptyStateVariants}
            className="py-16 text-center"
          >
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Borrowed Books</h2>
            <p className="text-gray-600 mb-6">
              You haven't borrowed any books yet. Start exploring our collection!
            </p>
            <a
              href="/books"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-blue-600 text-white font-medium
                hover:bg-blue-700
                transition-colors
              "
            >
              Browse Books
            </a>
          </motion.div>
        )}

        {/* Feedback Modal */}
        <FeedbackModal />
      </div>
    </div>
  )
}

export default BorrowedBooksPage

