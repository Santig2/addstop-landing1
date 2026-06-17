import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Problems from '../components/Problems'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import AppShowcase from '../components/AppShowcase'

import CTABanner from '../components/CTABanner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Home() {
  return (
    <div id="page-wrapper">
      <SEO titleKey="seo.homeTitle" descriptionKey="seo.homeDesc" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <Features />

        {/* Separador de luz */}
        <div className="section-divider">
          <div className="section-divider__line"></div>
          <div className="section-divider__car-wrapper">
            <div className="section-divider__car">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="var(--surface-main)" stroke="var(--accent-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
          </div>
        </div>

        <HowItWorks />
        <Benefits />

        <AppShowcase />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default Home
