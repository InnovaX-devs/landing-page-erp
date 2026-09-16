import Nav from './components/Nav'
import Hero from './components/Hero'
import Modules from './components/Modules'
import Pricing from './components/Pricing'
import Why from './components/Why'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grid-overlay"></div>
      <Nav />
      <Hero />
      <Modules />
      <Pricing />
      <Why />
      <Cta />
      <Footer />
    </>
  )
}
