import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { contactContent } from '../../../contents/contactContent'
import { showToast } from '../../../ui/ToastContainer'

function ContactFormSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
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
  const { form } = contactContent
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast({
        message: 'Please fill in all required fields correctly',
        type: 'error'
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Save to localStorage (in a real app, this would be sent to a server)
    const submissions = JSON.parse(localStorage.getItem('contact-submissions') || '[]')
    submissions.push({
      ...formData,
      date: new Date().toISOString()
    })
    localStorage.setItem('contact-submissions', JSON.stringify(submissions))

    showToast({
      message: form.successMessage,
      type: 'success',
      duration: 5000
    })

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setErrors({})
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {form.title}
            </h2>
            <p className="text-gray-600 text-lg">{form.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={formVariants}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.fields.fullName.label}
                  {form.fields.fullName.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`
                    w-full px-4 py-3 rounded-lg border
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-colors
                    ${errors.fullName ? 'border-red-300' : 'border-gray-300'}
                  `}
                  placeholder={form.fields.fullName.placeholder}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.fields.email.label}
                  {form.fields.email.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`
                    w-full px-4 py-3 rounded-lg border
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-colors
                    ${errors.email ? 'border-red-300' : 'border-gray-300'}
                  `}
                  placeholder={form.fields.email.placeholder}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.fields.phone.label}
                  {form.fields.phone.required && <span className="text-red-500 ml-1">*</span>}
                  {!form.fields.phone.required && (
                    <span className="text-gray-400 text-xs ml-2">(Optional)</span>
                  )}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="
                    w-full px-4 py-3 rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-colors
                  "
                  placeholder={form.fields.phone.placeholder}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.fields.subject.label}
                  {form.fields.subject.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`
                    w-full px-4 py-3 rounded-lg border
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-colors
                    ${errors.subject ? 'border-red-300' : 'border-gray-300'}
                  `}
                  placeholder={form.fields.subject.placeholder}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.fields.message.label}
                  {form.fields.message.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`
                    w-full px-4 py-3 rounded-lg border
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-colors resize-none
                    ${errors.message ? 'border-red-300' : 'border-gray-300'}
                  `}
                  placeholder={form.fields.message.placeholder}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full px-6 py-4 rounded-xl
                  bg-gradient-to-r from-blue-600 to-blue-700
                  text-white font-medium text-lg
                  hover:from-blue-700 hover:to-blue-800
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>{form.submittingButton}</span>
                  </>
                ) : (
                  <span>{form.submitButton}</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection

