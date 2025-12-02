import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { bookCategories } from '../../../contents/bookCategories'

function BookCategories() {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from a wide variety of book categories available in our library
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {bookCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link
                to={`/category/${category.id}`}
                className="
                  group relative bg-white rounded-xl p-6 
                  shadow-sm hover:shadow-lg 
                  transition-all duration-300 
                  cursor-pointer
                  border border-gray-100
                  hover:border-transparent
                  hover:-translate-y-1
                  block
                "
              >
              {/* Icon */}
              <div
                className={`
                  w-16 h-16 mx-auto mb-4 
                  ${category.bgColor}
                  rounded-full 
                  flex items-center justify-center
                  text-3xl
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              >
                <span>{category.icon}</span>
              </div>

              {/* Category Name */}
              <h3 className="text-center font-semibold text-gray-800 mb-1 text-sm md:text-base">
                {category.name}
              </h3>
              <p className="text-center text-xs md:text-sm text-gray-500">
                {category.nameEn}
              </p>

                {/* Hover Effect Overlay */}
                <div
                  className={`
                    absolute inset-0 rounded-xl
                    ${category.bgColor}
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    -z-10
                  `}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BookCategories

