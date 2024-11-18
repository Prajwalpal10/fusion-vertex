import React from 'react'

import Hero from '../component/Hero'
import Services from '../component/Service'
import MarketNews from '../component/MarketNews'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ContactForm from '../component/ContactForm'

function LandingPage() {
  return (
    <div className='w-screen'>
 <Navbar/>

      <div id="hero">
           <Hero/>
      </div>

     <div id="services">
            <Services/>
    </div>

     <div id="market">
         <MarketNews/>
    </div>
    <div id="contact">
      <ContactForm/>
    </div>

    <Footer/>
    </div>
  )
}

export default LandingPage