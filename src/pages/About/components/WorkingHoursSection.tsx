import { motion } from 'framer-motion'

function WorkingHoursSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
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
  const workingHours = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ]

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date().getDay()]
  }

  const currentDay = getCurrentDay()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Working Hours
            </h2>
            <p className="text-gray-600 text-lg">Visit us during our operating hours</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100"
          >
            <div className="space-y-4">
              {workingHours.map((schedule, index) => {
                const isToday = schedule.day === currentDay
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`
                      flex items-center justify-between
                      p-4 rounded-xl
                      transition-all duration-200
                      ${
                        isToday
                          ? 'bg-blue-600 text-white shadow-md scale-105'
                          : 'bg-white text-gray-700 hover:bg-blue-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${
                            isToday
                              ? 'bg-white/20 text-white'
                              : 'bg-blue-100 text-blue-600'
                          }
                        `}
                      >
                        {schedule.isOpen ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span
                          className={`font-semibold text-lg ${
                            isToday ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {schedule.day}
                          {isToday && (
                            <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                              Today
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-medium ${
                        isToday ? 'text-white' : schedule.isOpen ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">
                  <strong>Note:</strong> Hours may vary on holidays. Please check our announcements
                  for special schedules.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkingHoursSection

