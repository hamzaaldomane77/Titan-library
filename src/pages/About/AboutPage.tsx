import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutSection from './components/AboutSection'
import MissionVisionSection from './components/MissionVisionSection'
import WorkingHoursSection from './components/WorkingHoursSection'
import TeamSection from './components/TeamSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'

function AboutPage() {
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
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative py-20 md:py-32 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            About Titan Library
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering minds through knowledge, one book at a time
          </p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <MissionVisionSection />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <WhyChooseUsSection />
      </motion.div>

      {/* Working Hours Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <WorkingHoursSection />
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <TeamSection />
      </motion.div>
    </div>
  )
}

export default AboutPage

