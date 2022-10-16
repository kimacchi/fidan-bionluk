import React from 'react'
import Slider from "react-slick";import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GoQuote } from "react-icons/go"
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion'

const Quotes = () => {
    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        responsive:[
            {
                breakpoint: 1370,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 900,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    }
  return (
    <motion.div 
        className="quotes_wrapper" id="testimonials"
        initial={{opacity: 0, y: -190}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        viewport={{once:true}}
    >
        <h1>What Others Say</h1>
        <Slider {...settings} className="quotes_slider">
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
            <div className="quote">
                <IconContext.Provider value={{size: "3em"}}>
                    <GoQuote />
                </IconContext.Provider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo. Quisque dignissim.</p>
                <div className="quote_writer">
                    <div className="quote_writer_picture">
                        <img src="https://picsum.photos/200"/>
                    </div>
                    <p>Someone</p>
                </div>
            </div>
        </Slider>
    </motion.div>
  )
}

export default Quotes