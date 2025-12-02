export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-3 md:gap-4">
      {/* Previous */}
      <button
        type="button"
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          px-3 md:px-4 py-2 rounded-full text-sm font-medium border
          transition-all duration-200
          ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200 bg-gray-100 cursor-not-allowed'
              : 'text-gray-700 border-gray-200 bg-white hover:bg-gray-50'
          }
        `}
      >
        Previous
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1 md:gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1
          const isActive = page === currentPage
          return (
            <button
              key={page}
              type="button"
              onClick={() => handleChange(page)}
              className={`
                w-8 h-8 md:w-9 md:h-9 rounded-full text-xs md:text-sm font-medium
                flex items-center justify-center
                transition-all duration-200
                ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          px-3 md:px-4 py-2 rounded-full text-sm font-medium border
          transition-all duration-200
          ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200 bg-gray-100 cursor-not-allowed'
              : 'text-gray-700 border-gray-200 bg-white hover:bg-gray-50'
          }
        `}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination


