/**
 * Page Loader Component
 * Shows loading state during page transitions
 */
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Loading from '../ui/Loading'

function PageLoader() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Skip loading on initial page load
    if (isInitialLoad) {
      setIsInitialLoad(false)
      return
    }

    setIsLoading(true)

    // Simulate page transition delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [location.pathname, isInitialLoad])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Loading fullScreen={true} size="lg" message="Loading..." />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader

