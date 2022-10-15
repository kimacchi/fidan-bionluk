import React from 'react'
import Navbar from '../components/Navbar'
import FirstInfoSection from "../components/FirstInfoSection"
import SecondInfoSection from "../components/SecondInfoSection"
import WhatWeOffer from '../components/WhatWeOffer'
import Memberships from '../components/Memberships'
import Quotes from '../components/Quotes'
import Faq from '../components/Faq'

const Main = () => {
  return (
    <div className="main_container">
      <Navbar />
      <FirstInfoSection />
      <SecondInfoSection />
      <WhatWeOffer />
      <Memberships />
      <Quotes />
      <Faq />
    </div>
  )
}

export default Main