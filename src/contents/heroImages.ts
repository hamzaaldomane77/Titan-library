// Hero Images for Swiper with different texts
import image1 from '../assets/home-library1-1024x683.jpg'
import image2 from '../assets/177864.jpeg'
import image3 from '../assets/98307370.webp'
import image4 from '../assets/07-1.jpg'

export interface HeroImage {
  id: number
  url: string
  alt: string
  title: string
  description: string
}

export const heroImages: HeroImage[] = [
  {
    id: 1,
    url: image1,
    alt: 'Modern home library with organized books',
    title: 'Titan Library',
    description: 'A specialized library for book lending - Discover the world of knowledge with us'
  },
  {
    id: 2,
    url: image2,
    alt: 'Classic library interior with bookshelves',
    title: 'Titan Library',
    description: 'Explore our vast collection of books and expand your horizons'
  },
  {
    id: 3,
    url: image3,
    alt: 'Contemporary library space with reading area',
    title: 'Titan Library',
    description: 'Your gateway to endless stories and knowledge - Start your reading journey today'
  },
  {
    id: 4,
    url: image4,
    alt: 'Cozy library corner with books',
    title: 'Titan Library',
    description: 'Borrow, read, and discover - Join our community of book lovers'
  }
]

