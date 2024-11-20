import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen.js'; // Ensure this is correctly imported
import ArrowIndicator from './ArrowIndicator';
import './App.css';

function Section1() {
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
        className='responsive-text-b'
        style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: "80px" }}
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        사용하시는 포스기 그대로,
      </motion.p>
      <motion.p
        className='responsive-text-b'
        style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: "15px" }}
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        테이블에 부착된 QR코드로
      </motion.p>
      <motion.p
        className='responsive-text-b'
        style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: "15px" }}
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        매장의 모든 주문 관리
      </motion.p>

      <ArrowIndicator />
      <div style={{ paddingTop: '20px' }}></div>
    </div>
  );
}

export default Section1;
