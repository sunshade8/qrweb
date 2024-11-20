import React, { useRef } from 'react';
import './Main.css';
import useOnScreen from './useOnScreen.js';
import phoneImage from './images/mainmock.png';
import Section1 from './Section1';
import Section2 from './Section2';
import InfoSection from './InfoSection';
import ApplyButton from './applyButton';
import orderlyLogo from './images/orderlylogoblack.png'
import { motion } from 'framer-motion';

function Main() {
  const imageRef = useRef();
  const isImageVisible = useOnScreen(imageRef, "100px");
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.3, ease: "easeOut" }
    }
  };

  return (
    <div
      className="Main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div
        className="Main_header"
        style={{
          display: 'flex',
          position: 'fixed',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          padding: '10px',
          paddingLeft: '20px',
          zIndex: 1000,
          borderBottom: '0.5px solid #ccc'
        }}
      >
        <img
          src={orderlyLogo}
          alt="Brand Logo"
          style={{
            height: '25px',
            marginTop: '10px',
            marginRight: '5px',
          }}
        />
        <ApplyButton />
      </div>
      <div style={{ padding: "30px" }}></div>
      <Section1 />
      <motion.img
        ref={imageRef}
        src={phoneImage}
        alt="Example"
        className="resizable-image"
        variants={fadeInUp}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isImageVisible ? 1 : 0.8, opacity: isImageVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      <Section2 />
      <InfoSection />
    </div>
  );
}

export default Main;