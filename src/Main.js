import React from 'react';
import './Main.css';
import Button from '@mui/material/Button';
import phoneImage from './images/iPhone12_Clay_Shadow.png';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import InfoSection from './InfoSection';
import ApplyButton from './applyButton';

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
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>QRMENU</p>
          <ApplyButton></ApplyButton>
      </div>  
      <div style={{padding: "30px"}}></div>
      <Section1 />
      <img src={phoneImage} alt="Example" className="resizable-image" />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <InfoSection />
    </div>
  );
}

export default Main;
