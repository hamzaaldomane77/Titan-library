import { useState } from 'react'
import type { FormEvent } from 'react'
import { useBorrowingStore } from '../store/borrowingStore'
import { showToast } from './ToastContainer'

type Rating = 1 | 2 | 3 | 4 | 5

const ratingEmojis: Record<Rating, string> = {
  1: '😞',
  2: '😐',
  3: '🙂',
  4: '😊',
  5: '😍'
}

const ratingLabels: Record<Rating, string> = {
  1: 'Very Poor',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

function FeedbackModal() {
  const { isFeedbackModalOpen, closeFeedbackModal } = useBorrowingStore()
  const [rating, setRating] = useState<Rating | null>(null)
  const [hoveredRating, setHoveredRating] = useState<Rating | null>(null)
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!rating) {
      showToast({
        message: 'Please select a rating',
        type: 'warning'
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Save feedback to localStorage
    const feedbackData = {
      rating,
      feedback: feedback.trim(),
      date: new Date().toISOString()
    }

    const existingFeedback = JSON.parse(localStorage.getItem('titan-library-feedback') || '[]')
    existingFeedback.push(feedbackData)
    localStorage.setItem('titan-library-feedback', JSON.stringify(existingFeedback))

    showToast({
      message: 'Thank you for your feedback! We appreciate your input.',
      type: 'success',
      duration: 4000
    })

    // Reset form
    setRating(null)
    setFeedback('')
    setHoveredRating(null)
    setIsSubmitting(false)
    closeFeedbackModal()
  }

  const handleClose = () => {
    setRating(null)
    setFeedback('')
    setHoveredRating(null)
    closeFeedbackModal()
  }

  if (!isFeedbackModalOpen) return null

  const activeRating = hoveredRating || rating

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="
          bg-white rounded-2xl shadow-2xl
          w-full max-w-lg
          m-4
          transform transition-all duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
          <p className="text-sm text-gray-600 mt-1">
            Help us improve by sharing your feedback about borrowing books from Titan Library
          </p>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              How would you rate your experience? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center gap-4">
              {(Object.keys(ratingEmojis) as unknown as Rating[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHoveredRating(value)}
                  onMouseLeave={() => setHoveredRating(null)}
                  className={`
                    w-16 h-16 rounded-full
                    flex items-center justify-center
                    text-4xl
                    transition-all duration-200
                    ${activeRating === value
                      ? 'scale-125 bg-blue-50 ring-4 ring-blue-200'
                      : 'hover:scale-110 hover:bg-gray-50'
                    }
                    ${rating === value ? 'bg-blue-100' : ''}
                  `}
                >
                  {ratingEmojis[value]}
                </button>
              ))}
            </div>
            {activeRating && (
              <p className="text-center mt-3 text-sm font-medium text-gray-700">
                {ratingLabels[activeRating]}
              </p>
            )}
          </div>

          {/* Feedback Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="
                w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-colors resize-none
                text-sm
              "
              placeholder="Tell us more about your experience... What did you like? What could we improve?"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="
                flex-1 px-4 py-2.5 rounded-lg
                border border-gray-300 text-gray-700 font-medium
                hover:bg-gray-50
                transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!rating || isSubmitting}
              className="
                flex-1 px-4 py-2.5 rounded-lg
                bg-blue-600 text-white font-medium
                hover:bg-blue-700
                transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit Feedback'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackModal

