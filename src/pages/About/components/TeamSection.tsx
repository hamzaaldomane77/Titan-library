import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  description: string
  icon: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'Library Director',
    description: 'Leading our mission to make knowledge accessible to all',
    icon: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Digital Resources Manager',
    description: 'Managing our digital collection and online services',
    icon: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Community Outreach Coordinator',
    description: 'Connecting with readers and building our community',
    icon: '👩‍🎓'
  },
  {
    name: 'David Thompson',
    role: 'Technical Support Specialist',
    description: 'Ensuring smooth operation of our digital platform',
    icon: '👨‍🔧'
  }
]

function TeamSection() {
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals who make Titan Library a welcoming place for all
              readers
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  bg-white rounded-2xl p-6
                  shadow-md border border-gray-100
                  hover:shadow-xl hover:border-blue-200
                  transition-all duration-300
                  group
                "
              >
                <div className="text-center mb-4">
                  <div
                    className="
                      w-20 h-20 mx-auto mb-4
                      bg-gradient-to-br from-blue-500 to-indigo-600
                      rounded-2xl flex items-center justify-center
                      text-4xl
                      group-hover:scale-110 transition-transform duration-300
                      shadow-lg
                    "
                  >
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <p className="text-gray-700 text-lg mb-4">
                Interested in joining our team? We're always looking for passionate individuals who
                share our love for books and learning.
              </p>
              <button
                className="
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-blue-600 to-blue-700
                  text-white font-medium
                  hover:from-blue-700 hover:to-blue-800
                  shadow-md hover:shadow-lg
                  transition-all duration-300
                "
              >
                View Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection

