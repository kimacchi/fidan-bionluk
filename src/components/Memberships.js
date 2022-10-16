import React from 'react'
import {AiFillStar} from "react-icons/ai"
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'

const Memberships = () => {
  return (
    <motion.div 
        className="memberships_container" id="memberships"
        initial={{opacity: 0, y: -190}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        viewport={{once:true}}  
    >
        <h1>Memberships</h1>
        <div className="offer_stack">
            <div className="card">
                <div className='card_head'>
                    <div className='card_head_info'>
                        <p>MONTHLY</p>
                        <h1>27.99€</h1>
                        <p>FOR 1 MONTH</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                </ul>
                <Button variant="contained" className='buy_button'>Buy Now</Button>
            </div>
            <div className="card">
                <div className='card_head'>
                    <div className='card_head_info'>
                        <p>MONTHLY</p>
                        <h1>27.99€</h1>
                        <p>FOR 1 MONTH</p>
                    </div>
                    <div className='flag'>13% OFF</div>
                </div>
                <ul>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiFillStar />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                </ul>
                <Button variant="contained" className='buy_button'>Buy Now</Button>
            </div>
        </div>
        
    </motion.div>
  )
}

export default Memberships