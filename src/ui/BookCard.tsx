import { Link } from 'react-router-dom'
import type { Book } from '../contents/books'
import { useBorrowingStore } from '../store/borrowingStore'
import { showToast } from './ToastContainer'

export interface BookCardProps {
  book: Book
  /**
   * Optional category label shown above the title (e.g. category name)
   */
  categoryLabel?: string
  /**
   * Optional className overrides for outer card
   */
  className?: string
  /**
   * Optional index for staggered animations
   */
  index?: number
  /**
   * Show checkbox for selection
   */
  showCheckbox?: boolean
  /**
   * Show details button
   */
  showDetailsButton?: boolean
}

function BookCard({ book, categoryLabel, className = '', index = 0, showCheckbox = false, showDetailsButton = true }: BookCardProps) {
  const delay = `${index * 60}ms`
  const { selectedBookIds, toggleBookSelection } = useBorrowingStore()
  const isSelected = selectedBookIds.includes(book.id)

  const handleCheckboxChange = () => {
    if (!book.available) {
      showToast({
        message: 'This book is currently unavailable for borrowing',
        type: 'warning'
      })
      return
    }
    toggleBookSelection(book.id, book.available)
  }

  return (
    <div
      className={`
        group flex flex-col bg-white rounded-2xl border
        shadow-sm hover:shadow-lg
        overflow-hidden
        transform transition-all duration-500 ease-out
        ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-100'}
        ${className}
      `}
      style={{ animationDelay: delay as string }}
    >
      {/* Cover */}
      <div className="relative overflow-hidden">
        {showCheckbox && (
          <div className="absolute top-3 left-3 z-10">
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={handleCheckboxChange}
                disabled={!book.available}
                className="
                  w-5 h-5 rounded border-gray-300
                  text-blue-600 focus:ring-blue-500
                  cursor-pointer
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              />
            </label>
          </div>
        )}
        <div className="aspect-3/4 w-full bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-6xl opacity-20">📚</div>
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Scale on hover */}
        <div className="pointer-events-none absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 py-4 md:px-5 md:py-5 space-y-2">
        {categoryLabel && (
          <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
            {categoryLabel}
          </span>
        )}

        <h3
          className="
            text-base md:text-lg font-semibold text-gray-900
            group-hover:text-blue-700
            transition-colors duration-300
            line-clamp-2
          "
        >
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">{book.author}</p>

        {book.description && (
          <p className="text-sm text-gray-600 line-clamp-3 mt-1">
            {book.description}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-gray-500">
          {book.year && (
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {book.year}
            </span>
          )}
          {book.pages && (
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {book.pages} pages
            </span>
          )}
          {typeof book.isbn === 'number' && (
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              ISBN: {book.isbn}
            </span>
          )}
          <span
            className={`
              ml-auto px-2.5 py-1 rounded-full
              text-[11px] font-medium
              ${book.available ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}
            `}
          >
            {book.available ? 'Available' : 'Unavailable'}
          </span>
        </div>

        {showDetailsButton && (
          <div className="pt-3">
            <Link
              to={`/books/${book.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View Details</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookCard


