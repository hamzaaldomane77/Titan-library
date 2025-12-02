import Hero from './components/Hero'
import BookCategories from './components/BookCategories'
import TrendingBooks from './components/TrendingBooks'
import NewArrivals from './components/NewArrivals'
import ScrollAnimation from '../../ui/ScrollAnimation'

function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <ScrollAnimation delay={0.1}>
        <BookCategories />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <TrendingBooks />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <NewArrivals />
      </ScrollAnimation>
    </div>
  )
}

export default HomePage

