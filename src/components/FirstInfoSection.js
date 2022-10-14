import React from 'react'
import { Button } from '@mui/material'

const FirstInfoSection = () => {
  return (
    <div className="first_section_wrapper">
      <h1>Lorem Ipsum <span className="header_other_color">Dolor Sit.</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, risus ut lacinia aliquet, augue massa.</p>
      <Button variant="contained" className="first_section_button" >Join Us Now</Button>
    </div>
  )
}

export default FirstInfoSection