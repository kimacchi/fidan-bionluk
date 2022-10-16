import React from 'react'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import { IconContext } from 'react-icons';


const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_first">
        <img src={require("../images/logo_saydam.png")} alt="logo"/>
        <div className="footer_navigation_stack">
          <p>NAVIGATION</p>
          <div className='footer_navigation_link_cluster'>
            <div className="footer_navigation_link_cluster__part">
              <a href="/#">Home</a>
              <a href="/#about">About</a>
              <a href="/#features">Features</a>
            </div>
            <div className="footer_navigation_link_cluster__part">
              <a href="/#memberships">Memberships</a>
              <a href="/#testimonials">Testimonials</a>
              <a href="/#faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer_reach">
          <div className="footer_contact">
            <p>Contact</p>
            <p>your@email.com</p>
          </div>
          <div className="footer_social">
            <p>Follow us on</p>
            <a href="/#">
              <AiOutlineTwitter />
            </a>
            <a href="/#">
              <AiOutlineFacebook />
            </a>
            <a href="/#">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_second">
        <p>Lorem Ipsum Copyright Text</p>
        <div className="footer_terms">
          <a href="/#">Terms of Service</a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">Refund Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer