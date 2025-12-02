import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBorrowingStore } from '../store/borrowingStore'
import { books } from '../contents/books'
import { showToast } from './ToastContainer'

function BorrowModal() {
  const navigate = useNavigate()
  const { selectedBookIds, isBorrowModalOpen, closeBorrowModal, borrowBooks } =
    useBorrowingStore()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    idNumber: '',
    address: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedBooks = books.filter((book) => selectedBookIds.includes(book.id))

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast({
        message: 'Please fill in all required fields correctly',
        type: 'error'
      })
      return
    }

    // Check if any selected book is unavailable
    const unavailableBooks = selectedBooks.filter((book) => !book.available)
    if (unavailableBooks.length > 0) {
      showToast({
        message: 'Some selected books are no longer available',
        type: 'error'
      })
      return
    }

    const borrowedCount = borrowBooks({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      idNumber: formData.idNumber.trim() || undefined,
      address: formData.address.trim() || undefined
    })

    // Show success toast after borrowing
    if (borrowedCount > 0) {
      showToast({
        message: `تم استعارة ${borrowedCount} كتاب بنجاح! | Successfully borrowed ${borrowedCount} book(s)!`,
        type: 'success',
        duration: 4000
      })
      
      // Navigate to My Books page after successful borrowing
      setTimeout(() => {
        navigate('/borrowed')
      }, 500)
    } else {
      showToast({
        message: 'لم يتم استعارة أي كتاب. يرجى التحقق من توفر الكتب المحددة.',
        type: 'warning'
      })
    }

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      idNumber: '',
      address: ''
    })
    setErrors({})
  }

  const handleClose = () => {
    closeBorrowModal()
    setErrors({})
  }

  if (!isBorrowModalOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="
          bg-white rounded-2xl shadow-2xl
          w-full max-w-2xl max-h-[90vh] overflow-y-auto
          m-4
          transform transition-all duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Borrow Books</h2>
          <button
            onClick={handleClose}
            className="
              w-8 h-8 rounded-full
              flex items-center justify-center
              text-gray-400 hover:text-gray-600 hover:bg-gray-100
              transition-colors
            "
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Selected Books List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Selected Books ({selectedBooks.length})
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {selectedBooks.map((book) => (
                <div
                  key={book.id}
                  className="
                    flex items-center justify-between
                    p-3 bg-gray-50 rounded-lg
                    border border-gray-200
                  "
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{book.title}</p>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                  <span
                    className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                    `}
                  >
                    {book.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`
                  w-full px-4 py-2 rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                  ${errors.fullName ? 'border-red-300' : 'border-gray-300'}
                `}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`
                  w-full px-4 py-2 rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                  ${errors.phone ? 'border-red-300' : 'border-gray-300'}
                `}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`
                  w-full px-4 py-2 rounded-lg border
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                  ${errors.email ? 'border-red-300' : 'border-gray-300'}
                `}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Number <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                className="
                  w-full px-4 py-2 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                "
                placeholder="Enter your ID number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="
                  w-full px-4 py-2 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors resize-none
                "
                placeholder="Enter your address"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="
                  flex-1 px-4 py-2 rounded-lg
                  border border-gray-300 text-gray-700
                  hover:bg-gray-50
                  transition-colors
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="
                  flex-1 px-4 py-2 rounded-lg
                  bg-blue-600 text-white font-medium
                  hover:bg-blue-700
                  transition-colors
                "
              >
                Confirm Borrow
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BorrowModal

