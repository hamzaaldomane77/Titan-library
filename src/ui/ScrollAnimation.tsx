import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
}

function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollAnimationProps) {
  const variants = directionVariants[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation

