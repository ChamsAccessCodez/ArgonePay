import React from 'react'
import {LandingPageContainer} from "./LandingPageStyle"
import Header from './header/Header'
import Hero from "./hero/Hero"
import Trusted from './trusted/Trusted'
import CheckoutJourney from './checkoutJourney/CheckoutJourney'
import Work from './work/Work'
import ArgoneEveryone from './argoneEveryone/ArgoneEveryone'
import Faq from './faq/Faq'
import GetStarted from './getStarted/GetStarted'
import Footer from './footer/Footer'


const LandingPage = () => {
  return (
    <LandingPageContainer>
        <Header />
        <Hero />
        <Trusted />
        <CheckoutJourney />
        <Work />
        <ArgoneEveryone />
        <Faq />
        <GetStarted />
        <Footer />
    </LandingPageContainer>
  )
}

export default LandingPage