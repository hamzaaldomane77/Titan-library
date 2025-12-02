import { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { bookCategories, type Category } from '../../contents/bookCategories'
import BookCard from '../../ui/BookCard'
import Pagination from '../../ui/Pagination'
import { useBooksStore } from '../../store/booksStore'
import { useBorrowingStore } from '../../store/borrowingStore'
import BorrowModal from '../../ui/BorrowModal'

const PAGE_SIZE = 12

function BooksPage() {
  const location = useLocation()

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | 'all'>('all')
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'available' | 'unavailable'>('all')
  const { filteredBooks, currentPage, itemsPerPage, setPage, filterBooks } = useBooksStore()
  const [searchValue, setSearchValue] = useState('')
  const { selectedBookIds, openBorrowModal, clearSelection } = useBorrowingStore()
  const hasSelectedBooks = selectedBookIds.length > 0

  const categoriesOptions = useMemo(
    () => [
      { id: 'all' as const, name: 'All Categories' },
      ...bookCategories.map((c) => ({ id: c.id, name: c.nameEn }))
    ],
    []
  )

  const categoryFilteredBooks = useMemo(() => {
    let books = filteredBooks
    
    // Filter by category
    if (selectedCategoryId !== 'all') {
      books = books.filter((b) => b.categoryId === selectedCategoryId)
    }
    
    // Filter by availability
    if (availabilityFilter === 'available') {
      books = books.filter((b) => b.available === true)
    } else if (availabilityFilter === 'unavailable') {
      books = books.filter((b) => b.available === false)
    }
    
    return books
  }, [filteredBooks, selectedCategoryId, availabilityFilter])

  const totalPages = Math.max(1, Math.ceil(categoryFilteredBooks.length / itemsPerPage || PAGE_SIZE))

  const currentPageSafe = Math.min(Math.max(currentPage, 1), totalPages)
  const startIndex = (currentPageSafe - 1) * itemsPerPage
  const paginatedBooks = categoryFilteredBooks.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        staggerChildren: 0.08,
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
          className="mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Explore Books
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-xl">
              Browse our curated collection of books across different categories. Use filters,
              search, and pagination to discover more titles.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Search by</label>
              <input
                type="text"
                value={searchValue} 
                onChange={(e) => {
                  const value = e.target.value
                  setSearchValue(value)
                  filterBooks(value)
                
                  setPage(1)
                }}
                placeholder=" title, author, or ISBN..."
                className="
                  flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                "
              />
            </div>
            <div className="flex items-center gap-3 md:flex-wrap md:gap-3">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Category</label>
                <select
                  value={selectedCategoryId}
                  onChange={(e) => {
                    const value = e.target.value === 'all' ? 'all' : Number(e.target.value)
                    setSelectedCategoryId(value)
                    setPage(1)
                  }}
                  className="
                    rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  "
                >
                  {categoriesOptions.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Availability</label>
                <select
                  value={availabilityFilter}
                  onChange={(e) => {
                    const value = e.target.value as 'all' | 'available' | 'unavailable'
                    setAvailabilityFilter(value)
                    setPage(1)
                  }}
                  className="
                    rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  "
                >
                  <option value="all">All</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        {paginatedBooks.length > 0 ? (
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
            {paginatedBooks.map((book) => {
              const category: Category | undefined = bookCategories.find((c) => c.id === book.categoryId)
              return (
                <motion.div key={book.id} variants={itemVariants}>
                  <BookCard
                    book={book}
                    categoryLabel={category?.nameEn}
                    showCheckbox={true}
                    showDetailsButton={false}
                  />
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
            <p className="text-lg text-gray-600">No books found for this filter.</p>
          </motion.div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPageSafe}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Borrow Button - Fixed at bottom */}
        {hasSelectedBooks && (
          <div
            className={`
              fixed bottom-6 left-1/2 -translate-x-1/2 z-40
              transition-all duration-300
              ${hasSelectedBooks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
            `}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 px-6 py-4 flex items-center gap-4">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">{selectedBookIds.length}</span> book(s) selected
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearSelection}
                  className="
                    px-4 py-2 rounded-lg
                    border border-gray-300 text-gray-700
                    hover:bg-gray-50
                    transition-colors text-sm font-medium
                  "
                >
                  Clear
                </button>
                <button
                  onClick={openBorrowModal}
                  className="
                    px-6 py-2 rounded-lg
                    bg-blue-600 text-white font-medium
                    hover:bg-blue-700
                    transition-colors text-sm
                    flex items-center gap-2
                  "
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Borrow Selected Books
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Borrow Modal */}
        <BorrowModal />
      </div>
    </div>
  )
}

export default BooksPage


