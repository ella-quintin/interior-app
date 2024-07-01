import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Production from "./components/production"
import Reviews from "./components/reviews"
import Services from "./components/services"
import Testimonial from "./components/testimonial"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Reviews />
      <Testimonial />
      <Production />
    </div>
  )
}

export default LandingPage