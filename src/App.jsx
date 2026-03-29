import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import StarSection from './Components/StarSection/StarSection'
import GetStartedSection from './Components/GetStartedSection/GetStartedSection'
import PricingSection from './Components/PricingSection/PricingSection'
import WorkFlowSection from './Components/WorkFlowSection/WorkFlowSection'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StarSection />

      {/* break */}


      <GetStartedSection />
      <PricingSection />
      <WorkFlowSection />
      <Footer />

    </div>

  )
}

export default App
