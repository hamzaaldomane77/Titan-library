import { motion } from 'framer-motion'

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Titan Library
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to <strong className="text-gray-900">Titan Library</strong>, a modern digital
              library dedicated to providing access to a vast collection of books and educational
              resources. Since our establishment, we have been committed to fostering a love for
              reading and learning in our community.
            </p>

            <p className="text-lg leading-relaxed">
              Our mission is to make knowledge accessible to everyone, regardless of their location or
              background. We believe that books have the power to transform lives, inspire
              creativity, and connect people across cultures and generations.
            </p>

            <p className="text-lg leading-relaxed">
              Titan Library serves students, researchers, educators, and book enthusiasts from all
              walks of life. Whether you're looking for academic resources, fiction, non-fiction, or
              specialized publications, our carefully curated collection has something for
              everyone.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <p className="text-lg font-medium text-gray-900 mb-2">
                Our Vision for the Future
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where knowledge is freely accessible, where every individual has
                the opportunity to learn, grow, and explore the vast universe of human knowledge
                through the power of books and digital resources.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

