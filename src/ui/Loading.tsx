/**
 * Loading Component
 * Beautiful loading spinner for page transitions
 */
import { motion } from 'framer-motion'

interface LoadingProps {
  fullScreen?: boolean
  size?: 'sm' | 'md' | 'lg'
  message?: string
}

function Loading({ fullScreen = false, size = 'md', message }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  // Animation props for spinner
  const spinnerAnimation = {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear' as const
    }
  }

  // Animation props for dots
  const dotAnimation = (delay: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay
    }
  })

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Spinner */}
          <motion.div
            animate={spinnerAnimation}
            className={`${sizeClasses[size]} relative`}
          >
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </motion.div>

          {/* Dots Animation */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={dotAnimation(index * 0.2)}
                className="w-2 h-2 rounded-full bg-blue-600"
              />
            ))}
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-600 font-medium"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={spinnerAnimation}
            className={`${sizeClasses[size]} relative`}
          >
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </motion.div>
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-600"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default Loading

