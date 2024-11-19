import React from 'react';
import './Main.css';
import phoneImage from './images/mainmock.png';
import Section1 from './Section1';
import Section2 from './Section2';
import InfoSection from './InfoSection';
import ApplyButton from './applyButton';
import orderlyLogo from './images/orderlylogoblack.png'

function Main() {
  return (
    <div
      className="Main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="Main_header"
          style={{
              display: 'flex',
              position: 'fixed',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
              padding: '10px',
              paddingLeft: '20px',
              
              zIndex: 1000,  // Make sure it stays on top of other content
              
              borderBottom: '0.5px solid #ccc'  // Add a bottom border
          }}
      >
          <img
          src={orderlyLogo}
          alt="Brand Logo"
          style={{
            height: '25px',  // Adjust the height to fit nicely in the header
            marginTop: '10px',
            marginRight: '5px',  // Space between logo and button
          }}
        />
          <ApplyButton></ApplyButton>
      </div>  
      <div style={{padding: "30px"}}></div>
      <Section1 />
      <img src={phoneImage} alt="Example" className="resizable-image" />
      <Section2 />
      <InfoSection />
    </div>
  );
}

export default Main;
