import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceBennes from './pages/services/ServiceBennes.jsx'
import ServiceTerrassement from './pages/services/ServiceTerrassement.jsx'
import ServiceTransport from './pages/services/ServiceTransport.jsx'
import ServiceStockage from './pages/services/ServiceStockage.jsx'
import About from './pages/About.jsx'
import Realisations from './pages/Realisations.jsx'
import Engagements from './pages/Engagements.jsx'
import Contact from './pages/Contact.jsx'
import Devis from './pages/Devis.jsx'
import { MentionsLegales, PolitiqueConfidentialite } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-services" element={<Services />} />
          <Route path="/nos-services/location-de-bennes" element={<ServiceBennes />} />
          <Route path="/nos-services/terrassement" element={<ServiceTerrassement />} />
          <Route path="/nos-services/transport" element={<ServiceTransport />} />
          <Route path="/nos-services/stockage" element={<ServiceStockage />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demande-de-devis" element={<Devis />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  )
}
