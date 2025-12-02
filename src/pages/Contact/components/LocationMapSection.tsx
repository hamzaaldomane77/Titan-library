import { motion } from 'framer-motion'
import { contactContent } from '../../../contents/contactContent'

function LocationMapSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
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
  const { map } = contactContent

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{map.title}</h2>
            <p className="text-gray-600 text-lg">{map.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96 bg-linear-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4">Interactive Map</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(map.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    bg-blue-600 text-white font-medium
                    hover:bg-blue-700
                    transition-colors
                    shadow-md hover:shadow-lg
                  "
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Address Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{map.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Directions</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We're located in the heart of Knowledge City, easily accessible by public
                  transportation. Free parking is available for visitors.
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(map.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-blue-600 font-medium
                    hover:text-blue-700
                    transition-colors
                  "
                >
                  <span>Get Directions</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationMapSection

