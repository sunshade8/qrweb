import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen.js'; // Ensure this is correctly imported
import { useMediaQuery } from 'react-responsive'; 

import './App.css';

function Section1() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const ref = useRef(); // Reference for the entire section or individual elements
  const isVisible = useOnScreen(ref);

  // Define motion variants for smooth animations
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.3, ease: "easeOut" }
    }
  };

  return (
    <div className='Section1'>

      <div className="pt-4"></div>
      <motion.p
        ref={ref}

        style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: "60px",fontSize: isDesktop ? '36px' : '26px',color:"#706F6F" }}
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        테이블 오더,
      </motion.p>
      <motion.p
    
        style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: "15px",fontSize: isDesktop ? '50px' : '36px' }}
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        감각적일 수 있습니다.
      </motion.p>
      <div style={{paddingTop:'20px'}}></div>
    </div>
    
  );
}

export default Section1;
