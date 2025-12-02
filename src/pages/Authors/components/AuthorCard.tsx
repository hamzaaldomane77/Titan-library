/**
 * Author Card Component
 * Displays individual author information in a card format
 */
import { motion } from 'framer-motion'
import type { Author } from '../../../modules/authors'

export interface AuthorCardProps {
  author: Author
  index?: number
}

function AuthorCard({ author, index = 0 }: AuthorCardProps) {
  const fullAddress = `${author.address.street}, ${author.address.suite}, ${author.address.city}, ${author.address.zipcode}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="
        group bg-white rounded-2xl p-6
        border border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:border-blue-200
        hover:-translate-y-1
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500">@{author.username}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
          {author.name.charAt(0)}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a
            href={`mailto:${author.email}`}
            className="hover:text-blue-600 transition-colors truncate"
          >
            {author.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="truncate">{author.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <a
            href={`https://${author.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors truncate"
          >
            {author.website}
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-xs text-gray-600 leading-relaxed">{fullAddress}</p>
        </div>
      </div>

      {/* Company */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm font-semibold text-gray-900">{author.company.name}</span>
        </div>
        <p className="text-xs text-gray-500 italic">{author.company.catchPhrase}</p>
      </div>
    </motion.div>
  )
}

export default AuthorCard

