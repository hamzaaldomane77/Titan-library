import { contactContent } from '../../../contents/contactContent'

function ContactIntroSection() {
  const { intro } = contactContent

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {intro.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6 font-medium">
            {intro.subtitle}
          </p>
          <p className="text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
            {intro.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactIntroSection

