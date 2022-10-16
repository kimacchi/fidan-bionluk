import React, {useState, useEffect} from 'react'
import { Button } from '@mui/material'
import Hamburger from 'hamburger-react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';


const links=[
  {name: "Home", to: "/", id:1},
  {name: "About", to: "#about", id:2},
  {name: "Features", to: "#features", id:3},
  {name: "Memberships", to: "#memberships", id:4},
  {name: "Testimonials", to: "#testimonials", id:5},
  {name: "FAQ", to: "#faq", id:6},
  {name: "Dashboard", to: "/", id:7},
]

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  
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
    <div className='navbar_container'>
          {
        open && (
          <AnimatePresence>
            <div className="aside_wrapper">
              <motion.aside
                initial={{width: 0}}
                animate={{width: 300}}
                exit={{
                  width: 0,
                  // transition: {delay: 0.9,duration: 0.3}
                }}
                className="navbar_aside"
              >
                <motion.div
                  className="navbar_link_container"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div
                    className="navbar_link_aligner"
                  >
                      {links.map(({ name, to, id }) => (
                            <motion.a
                                key={id}
                                href={to}
                                whileHover={{ scale: 1.05 }}
                            >
                            {name}
                            </motion.a>
                          ))}
                    
                  </div>
                </motion.div>
              </motion.aside>
            </div>
          </AnimatePresence>
        )
      }

      <img src={require("../images/logo_saydam.png")} alt="logo"/>
      {
        width > 750 ?
          <div className='navbar_link_aligner'>
            <a href="/#">Home</a>
            <a href="/#about">About</a>
            <a href="/#features">Features</a>
            <a href="/#memberships">Memberships</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#faq">FAQ</a>
          </div>
          :
          <Hamburger onToggle={cycleOpen} color="white" />
      }
      {
        width > 750 ?
          <Button variant='contained' className='navbar_dashboard_button'>Login</Button>
          :
          undefined
      }
    </div>
  )
}

export default Navbar