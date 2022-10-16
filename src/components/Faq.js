import React from 'react'
import { motion } from 'framer-motion'

const Faq = () => {
  return (
    <motion.div 
        className="faq_container" id="faq"
        initial={{opacity: 0, y: -190}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        viewport={{once:true}}
    >
        <h1>Do you have any question?</h1>
        <div className="faq_questions">
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
            <div className="faq_question">
                <h3>• Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Faq