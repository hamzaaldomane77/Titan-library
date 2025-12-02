import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { bookCategories } from '../../contents/bookCategories'
import { getBooksByCategory } from '../../contents/books'


function BooksByCategory() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const id = categoryId ? parseInt(categoryId) : 0
  
  const category = bookCategories.find(cat => cat.id === id)
  const books = getBooksByCategory(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [categoryId])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <span>←</span>
            <span className="ml-2">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className={`
              w-16 h-16 
              ${category.bgColor}
              rounded-full 
              flex items-center justify-center
              text-3xl
            `}>
              <span>{category.icon}</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {category.name}
              </h1>
              <p className="text-lg text-gray-600">{category.nameEn}</p>
            </div>
          </div>
          <p className="text-gray-600">
            {books.length} {books.length === 1 ? 'book' : 'books'} available
          </p>
        </div>

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Book Cover Placeholder */}
                <div className={`
                  w-full h-64 
                  ${category.bgColor}
                  flex items-center justify-center
                  text-6xl
                `}>
                  📖
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{book.titleEn}</p>
                  
                  <p className="text-gray-700 font-medium mb-2">
                    {book.author}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{book.authorEn}</p>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* Book Details */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500">
                    {book.year && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {book.year}
                      </span>
                    )}
                    {book.pages && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {book.pages} pages
                      </span>
                    )}
                    {book.isbn && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        ISBN: {book.isbn}
                      </span>
                    )}
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }
                    `}>
                      {book.available ? 'Available' : 'Unavailable'}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No books available in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BooksByCategory

