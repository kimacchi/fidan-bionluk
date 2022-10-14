import React from 'react'
import Navbar from '../components/Navbar'
import FirstInfoSection from "../components/FirstInfoSection"
import SecondInfoSection from "../components/SecondInfoSection"
import WhatWeOffer from '../components/WhatWeOffer'

const Main = () => {
  return (
    <div className="main_container">
      <Navbar />
      <FirstInfoSection />
      <SecondInfoSection />
      <WhatWeOffer />
    </div>
  )
}

export default Main