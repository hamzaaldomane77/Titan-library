import { useState, useEffect } from 'react'
import { heroImages } from '../../../contents/heroImages'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeSlide = heroImages[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0,
            pointerEvents: index === currentIndex ? 'auto' : 'none'
          }}
        >
          <img
            src={image.url}
            alt={image.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      ))}
      
     
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 2
        }}
      />

      
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {activeSlide.title}
          </h1>
          <p className="text-xl md:text-3xl text-white drop-shadow-lg max-w-3xl mx-auto">
            {activeSlide.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

