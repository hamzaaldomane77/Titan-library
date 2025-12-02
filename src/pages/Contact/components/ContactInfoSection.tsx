import { motion } from 'framer-motion'
import { contactContent } from '../../../contents/contactContent'

function ContactInfoSection() {
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
  const { contactInfo } = contactContent
  const { info } = contactInfo

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      value: info.email,
      link: `mailto:${info.email}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Phone',
      value: info.phone,
      link: `tel:${info.phone.replace(/\s/g, '')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      ),
      title: 'Address',
      value: info.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(info.address)}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Working Hours',
      value: info.workingHours,
      link: null
    }
  ]

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-gray-600 text-lg">{contactInfo.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactItems.map((item, index) => {
              const Component = item.link ? 'a' : 'div'
              const props = item.link
                ? {
                    href: item.link,
                    target: item.link.startsWith('http') ? '_blank' : undefined,
                    rel: item.link.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                : {}

              return (
                <motion.div key={index} variants={itemVariants}>
                  <Component
                    {...props}
                    className={`
                      bg-gradient-to-br from-white to-blue-50
                      rounded-2xl p-6
                      border border-gray-100
                      hover:shadow-xl hover:border-blue-200
                      transition-all duration-300
                      group
                      ${item.link ? 'cursor-pointer' : ''}
                    `}
                  >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.value}</p>
                  </Component>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection

