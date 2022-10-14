import React,{useState,useEffect} from 'react'
import {TiMessages} from "react-icons/ti"
import { IconContext } from 'react-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const Desktop = () => {
  return(
    <div className="what_we_offer_wrapper">
      <h1>What do we offer ?</h1>
      <div className="what_we_offer_card_container">
          {/* React icons kütüphanesindeki herhangi bir icon kullanılabilir. */}
          <div className="what_we_offer_card_1 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>

          <div className="what_we_offer_card_2 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>

          <div className="what_we_offer_card_3 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>

          <div className="what_we_offer_card_4 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>

          <div className="what_we_offer_card_5 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>

          <div className="what_we_offer_card_6 what_we_offer_card">
            <IconContext.Provider value={{size: "2.5em"}}>
              <TiMessages />
            </IconContext.Provider>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
          </div>
        </div>
    </div>
  )
}
const Mobile = () => {
  return (
    <div className="what_we_offer_wrapper">
      <h1>What Do We Offer?</h1>
      <Slide cssClass="something">
        <div className="what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>

        <div className="what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>

        <div className=" what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>

        <div className="what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>

        <div className="what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>

        <div className=" what_we_offer_card_mobile">
          <IconContext.Provider value={{size: "2.5em"}}>
            <TiMessages />
          </IconContext.Provider>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
        </div>
      </Slide>
    </div>
  )
}


const WhatWeOffer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(
        window.innerWidth
      )
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
})
  useEffect(() => {console.log(width)}, [width])
  return (
    
      width > 900 ?
      <Desktop />
      :
      <Mobile />
    
  )
}

export default WhatWeOffer