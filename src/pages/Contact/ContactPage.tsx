import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContactIntroSection from './components/ContactIntroSection'

import ContactFormSection from './components/ContactFormSection'
import LocationMapSection from './components/LocationMapSection'
import SocialLinksSection from './components/SocialLinksSection'

function ContactPage() {
  const location = useLocation()

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="w-full">
      {/* Intro Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <ContactIntroSection />
      </motion.div>

      {/* Contact Info Section */}
    

      {/* Contact Form Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <ContactFormSection />
      </motion.div>

      {/* Location Map Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <LocationMapSection />
      </motion.div>

      {/* Social Links Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <SocialLinksSection />
      </motion.div>
    </div>
  )
}

export default ContactPage

