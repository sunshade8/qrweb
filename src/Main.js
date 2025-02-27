import React, { useRef } from 'react';
import './Main.css';
import useOnScreen from './useOnScreen.js';
import Section1 from './Section1';
import Section2 from './Section2';
import InfoSection from './InfoSection';
import ApplyButton from './applyButton';
import orderlyNew from './images/orderlynewword.png';
import SlideView from './Slideview.js';  // Import the new slider component

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
          padding: '10px',
          paddingLeft:'20px',
    
        }}
      >
        <img
          src={orderlyNew}
          alt="Brand Logo"
          style={{
            height: '20px',
            marginTop: '0px',
            marginRight: '5px'
          }}
        />
        <ApplyButton />
        
      </div>
      <div style={{ padding: "20px" }}></div>
      <Section1 />

      {/* Replace the static image with the Swiper slider */}
      <SlideView />

      <Section2 />
      <InfoSection />
    </div>
  );
}

export default Main;
